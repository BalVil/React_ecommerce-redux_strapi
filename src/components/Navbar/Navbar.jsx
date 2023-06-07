import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import EN from "../../images/en.png";
import Logo from "../../images/elvisies.svg";
import Cart from "../Cart/Cart";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <ul className="navbarLeft">
          <li className="navbarItem">
            <img src={EN} alt="UK/USA flag" />
            <KeyboardArrowDownIcon />
          </li>
          <li className="navbarItem">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </li>
          <li className="navbarItem">
            <Link className="navbarLink" to="/products/1">
              Women
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="navbarLink" to="/products/1">
              Men
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="navbarLink" to="/products/1">
              Children
            </Link>
          </li>
        </ul>
        <div className="navbarCenter">
          <Link className="navbarLink" to="/">
            <img src={Logo} alt="logo" width="80" />
          </Link>
        </div>
        <ul className="navbarRight">
          <li className="navbarItem">
            <Link className="navbarLink" to="/">
              Homepage
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="navbarLink" to="/">
              About
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="navbarLink" to="/">
              Contact
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="navbarLink" to="/">
              Stores
            </Link>
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
