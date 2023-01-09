import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav__left">
        <Link to="/" className="nav__brand">
          eCom
        </Link>
      </div>
      <div className="nav__center">
        <ul className="nav__menu">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/login" className="nav__link">
              Login
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/signup" className="nav__link">
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav__right">
        <h3>Profile</h3>
      </div>
    </div>
  );
};

export default Navbar;
