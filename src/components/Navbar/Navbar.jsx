import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <ul className="left">
          <li className="item">
            <img src="/img/en.png" alt="UK/USA flag" />
            <KeyboardArrowDownIcon />
          </li>
          <li className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </li>
          <li className="item">
            <Link to="/products/1">Women</Link>
          </li>
          <li className="item">
            <Link to="/products/1">Men</Link>
          </li>
          <li className="item">
            <Link to="/products/1">Children</Link>
          </li>
        </ul>
        <div className="center">
          <Link to="/">LOGO</Link>
        </div>
        <ul className="right">
          <li className="item">
            <Link to="/">Homepage</Link>
          </li>
          <li className="item">
            <Link to="/">About</Link>
          </li>
          <li className="item">
            <Link to="/">Contact</Link>
          </li>
          <li className="item">
            <Link to="/">Stores</Link>
          </li>
          <li className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
