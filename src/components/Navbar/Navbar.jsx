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
        <img
          className="auth__avatar"
          src="https://i.ibb.co/pQHL2VX/1.jpg"
          alt=""
        />
        <div className="cart">
          {false && <div className="cart__item">6</div>}
          <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
