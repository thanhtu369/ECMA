import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tourService } from "../services/tourService";
import toast from "react-hot-toast";

function List() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    filterTours();
  }, [searchTerm, categoryFilter, statusFilter, tours]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const data = await tourService.getAll();
      setTours(data);
      setFilteredTours(data);
    } catch (error) {
      toast.error("Lỗi khi tải danh sách tour!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filterTours = () => {
    let filtered = [...tours];

    if (searchTerm) {
      filtered = filtered.filter((tour) =>
        tour.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((tour) => tour.category === categoryFilter);
    }

    if (statusFilter !== "") {
      const isActive = statusFilter === "true";
      filtered = filtered.filter((tour) => tour.active === isActive);
    }

    setFilteredTours(filtered);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa tour này?")) {
      try {
        await tourService.delete(id);
        setTours(tours.filter((tour) => tour.id !== id));
        toast.success("Xóa tour thành công!");
      } catch (error) {
        toast.error("Lỗi khi xóa tour!");
        console.error(error);
      }
    }
  };

  const handleToggleActive = async (id, currentActive) => {
    try {
      await tourService.toggleActive(id, !currentActive);
      setTours(
        tours.map((tour) =>
          tour.id === id ? { ...tour, active: !currentActive } : tour
        )
      );
      toast.success("Cập nhật trạng thái thành công!");
    } catch (error) {
      toast.error("Lỗi khi cập nhật trạng thái!");
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const categories = [...new Set(tours.map((tour) => tour.category).filter(Boolean))];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách tours</h1>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4 md:space-y-0 md:flex md:gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên tour..."
            className="w-full border rounded-lg px-3 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            className="w-full md:w-auto border rounded-lg px-3 py-2"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="w-full md:w-auto border rounded-lg px-3 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Tất cả trạng thái</option>
            <option value="true">Đang hoạt động</option>
            <option value="false">Không hoạt động</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Đang tải...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Ảnh</th>
                <th className="px-4 py-2 border">Tên tour</th>
                <th className="px-4 py-2 border">Điểm đến</th>
                <th className="px-4 py-2 border">Thời gian</th>
                <th className="px-4 py-2 border">Giá</th>
                <th className="px-4 py-2 border">Số chỗ còn</th>
                <th className="px-4 py-2 border">Danh mục</th>
                <th className="px-4 py-2 border">Trạng thái</th>
                <th className="px-4 py-2 border">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredTours.length === 0 ? (
                <tr>
                  <td colSpan="10" className="px-4 py-8 text-center text-gray-500">
                    Không có tour nào
                  </td>
                </tr>
              ) : (
                filteredTours.map((tour) => (
                  <tr key={tour.id}>
                    <td className="px-4 py-2 border">{tour.id}</td>
                    <td className="px-4 py-2 border">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-20 h-16 object-cover rounded"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/80x64";
                        }}
                      />
                    </td>
                    <td className="px-4 py-2 border">{tour.name}</td>
                    <td className="px-4 py-2 border">{tour.destination}</td>
                    <td className="px-4 py-2 border">{tour.duration}</td>
                    <td className="px-4 py-2 border">
                      {tour.price?.toLocaleString()} VND
                    </td>
                    <td className="px-4 py-2 border">{tour.available}</td>
                    <td className="px-4 py-2 border">{tour.category || "-"}</td>
                    <td className="px-4 py-2 border">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={tour.active ?? true}
                          onChange={() =>
                            handleToggleActive(tour.id, tour.active ?? true)
                          }
                          className="w-4 h-4"
                        />
                        <span className="ml-2 text-sm">
                          {tour.active ? "Hoạt động" : "Không hoạt động"}
                        </span>
                      </label>
                    </td>
                    <td className="px-4 py-2 border">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(tour.id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 text-sm"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => handleDelete(tour.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default List;
