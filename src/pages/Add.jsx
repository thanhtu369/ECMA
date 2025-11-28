import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    available: "",
    image: "",
    description: "",
    category: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTour({
      ...tour,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTour = {
      ...tour,
      price: Number(tour.price),
      available: Number(tour.available),
    };

    try {
      await axios.post("http://localhost:3001/tours", newTour);
      alert("Thêm tour thành công!");
      navigate("/list");
    } catch (err) {
      console.log(err);
      alert("Lỗi thêm tour!");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Thêm tour mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium mb-1">Tên tour</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Điểm đến</label>
          <input
            type="text"
            name="destination"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Thời gian</label>
          <input
            type="text"
            name="duration"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.duration}
            onChange={handleChange}
            required
          />
        </div>

        {/* Giá */}
        <div>
          <label className="block font-medium mb-1">Giá</label>
          <input
            type="number"
            name="price"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Số chỗ còn</label>
          <input
            type="number"
            name="available"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.available}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Ảnh (URL)</label>
          <input
            type="text"
            name="image"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.image}
            onChange={handleChange}
            required
          />
        </div>

       
        <div>
          <label className="block font-medium mb-1">Mô tả</label>
          <textarea
            name="description"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Danh mục</label>
          <select
            name="category"
            className="w-full border rounded-lg px-3 py-2"
            value={tour.category}
            onChange={handleChange}
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="tour nội địa">Tour nội địa</option>
            <option value="tour quốc tế">Tour quốc tế</option>
          </select>
        </div>

        {/* Active */}
        {/* <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="active"
            checked={tour.active}
            onChange={handleChange}
          />
          <label>Kích hoạt</label>
        </div> */}

        {/* Submit */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Thêm tour
        </button>
      </form>
    </div>
  );
}

export default Add;
