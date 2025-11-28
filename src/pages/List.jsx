import { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const res = await axios.get("http://localhost:3001/tours");
      setTours(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa tour này?")) {
      try {
        await axios.delete(`http://localhost:3001/tours/${id}`);
        setTours(tours.filter((tour) => tour.id !== id));
        alert("Xóa thành công!");
      } catch (err) {
        console.log(err);
        alert("Xóa thất bại!");
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách tours</h1>

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
              <th className="px-4 py-2 border">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id}>
                <td className="px-4 py-2 border">{tour.id}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-20 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{tour.name}</td>
                <td className="px-4 py-2 border">{tour.destination}</td>
                <td className="px-4 py-2 border">{tour.duration}</td>
                <td className="px-4 py-2 border">{tour.price.toLocaleString()} VND</td>
                <td className="px-4 py-2 border">{tour.available}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDelete(tour.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Xóa
                  </button>
                   <button
                    onClick={() => handleEdit(tour.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
