import { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import EN from "../../images/en.png";
import Logo from "../../images/logo.png";
import Cart from "../Cart/Cart";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbarLeft">
          <div className="navbarItem">
            <img src={EN} alt="UK/USA flag" />
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="navbarCenter">
          <NavLink className="navbarLink" to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="navbarRight">
          <li className="navbarItem">
            <NavLink className="navbarLink" to="/about">
              About
            </NavLink>
          </li>
          <li className="navbarItem">
            <NavLink className="navbarLink" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="navbarIcons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className="cartOrders">0</span>
            </div>
          </li>
        </ul>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
