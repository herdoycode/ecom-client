import "./Navbar.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Badge } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav__left">E-Com</div>
      <div className="nav__center">
        <div className="nav__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="nav__right">
        {true && (
          <>
            <NavLink className="nav__link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav__link" to="signup">
              Signup
            </NavLink>
          </>
        )}
        {false && <Avatar src="" />}
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </div>
    </div>
  );
};

export default Navbar;
