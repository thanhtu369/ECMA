import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { authService } from "../services/authService";
import toast from "react-hot-toast";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = authService.getUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    toast.success("Đăng xuất thành công!");
    navigate("/login");
  };

  const isAuthenticated = authService.isAuthenticated();

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          {/* Toggle menu mobile */}
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

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link to="/">Trang chủ</Link>
                <Link to="/list">Danh sách</Link>
                <Link to="/add">Thêm mới</Link>
                {user && (
                  <span className="text-sm">Xin chào, {user.email}</span>
                )}
                <button
                  onClick={handleLogout}
                  className="hover:underline cursor-pointer"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <Link to="/login">Đăng nhập</Link>
            )}
          </div>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden bg-blue-700 border-t border-blue-500">
            <div className="px-4 py-3 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link onClick={() => setOpen(false)} to="/">
                    Trang chủ
                  </Link>
                  <Link onClick={() => setOpen(false)} to="/list">
                    Danh sách
                  </Link>
                  <Link onClick={() => setOpen(false)} to="/add">
                    Thêm mới
                  </Link>
                  {user && (
                    <div className="text-sm py-2">
                      Xin chào, {user.email}
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="text-left w-full hover:underline"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <Link onClick={() => setOpen(false)} to="/login">
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
