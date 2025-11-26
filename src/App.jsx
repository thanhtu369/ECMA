import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden block focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/add">Thêm mới</Link>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-blue-700 border-t border-blue-500">
            <div className="px-4 py-3 space-y-2">
              <Link onClick={() => setOpen(false)} to="/">Trang chủ</Link>
              <Link onClick={() => setOpen(false)} to="/list">Danh sách</Link>
              <Link onClick={() => setOpen(false)} to="/add">Thêm mới</Link>
            </div>
          </div>
        )}
      </nav>

      {/* ROUTES */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB501</h1>
      <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p>
    </div>
  );
}

export default App;
