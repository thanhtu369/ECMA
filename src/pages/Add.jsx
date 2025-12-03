import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tourService } from "../services/tourService";
import toast from "react-hot-toast";

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

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!tour.name.trim()) {
      newErrors.name = "Tên tour là bắt buộc";
    }

    if (!tour.destination.trim()) {
      newErrors.destination = "Điểm đến là bắt buộc";
    }

    if (!tour.duration.trim()) {
      newErrors.duration = "Thời gian là bắt buộc";
    }

    if (!tour.price) {
      newErrors.price = "Giá là bắt buộc";
    } else if (Number(tour.price) <= 0) {
      newErrors.price = "Giá phải lớn hơn 0";
    }

    if (!tour.available) {
      newErrors.available = "Số chỗ còn là bắt buộc";
    } else if (Number(tour.available) < 0) {
      newErrors.available = "Số chỗ còn phải lớn hơn hoặc bằng 0";
    }

    if (!tour.image.trim()) {
      newErrors.image = "Ảnh là bắt buộc";
    } else if (!/^https?:\/\/.+/.test(tour.image)) {
      newErrors.image = "URL ảnh không hợp lệ";
    }

    if (!tour.description.trim()) {
      newErrors.description = "Mô tả là bắt buộc";
    }

    if (!tour.category) {
      newErrors.category = "Danh mục là bắt buộc";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTour({
      ...tour,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Vui lòng kiểm tra lại thông tin!");
      return;
    }

    const newTour = {
      ...tour,
      price: Number(tour.price),
      available: Number(tour.available),
    };

    try {
      await tourService.create(newTour);
      toast.success("Thêm tour thành công!");
      navigate("/list");
    } catch (error) {
      toast.error("Lỗi khi thêm tour!");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Thêm tour mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Tên tour *</label>
          <input
            type="text"
            name="name"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.name ? "border-red-500" : ""
            }`}
            value={tour.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Điểm đến *</label>
          <input
            type="text"
            name="destination"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.destination ? "border-red-500" : ""
            }`}
            value={tour.destination}
            onChange={handleChange}
          />
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Thời gian *</label>
          <input
            type="text"
            name="duration"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.duration ? "border-red-500" : ""
            }`}
            value={tour.duration}
            onChange={handleChange}
            placeholder="VD: 4 ngày 3 đêm"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Giá (VND) *</label>
          <input
            type="number"
            name="price"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.price ? "border-red-500" : ""
            }`}
            value={tour.price}
            onChange={handleChange}
            min="0"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Số chỗ còn *</label>
          <input
            type="number"
            name="available"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.available ? "border-red-500" : ""
            }`}
            value={tour.available}
            onChange={handleChange}
            min="0"
          />
          {errors.available && (
            <p className="text-red-500 text-sm mt-1">{errors.available}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Ảnh (URL) *</label>
          <input
            type="text"
            name="image"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.image ? "border-red-500" : ""
            }`}
            value={tour.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Mô tả *</label>
          <textarea
            name="description"
            rows="4"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.description ? "border-red-500" : ""
            }`}
            value={tour.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Danh mục *</label>
          <select
            name="category"
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.category ? "border-red-500" : ""
            }`}
            value={tour.category}
            onChange={handleChange}
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="tour nội địa">Tour nội địa</option>
            <option value="tour quốc tế">Tour quốc tế</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="active"
              className="w-4 h-4"
              checked={tour.active}
              onChange={handleChange}
            />
            <span className="ml-2">Tour đang hoạt động</span>
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Thêm tour
          </button>
          <button
            type="button"
            onClick={() => navigate("/list")}
            className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
