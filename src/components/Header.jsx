import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-900 py-4">
      <ul className="flex justify-center gap-10">
        <li>
          <Link className="text-white text-lg hover:text-blue-400 transition" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white text-lg hover:text-blue-400 transition" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="text-white text-lg hover:text-blue-400 transition" to="/Booking">
            Booking
          </Link>
        </li>
        <li>
          <Link className="text-white text-lg hover:text-blue-400 transition" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
