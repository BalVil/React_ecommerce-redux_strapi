import { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Navbar.module.scss";
import EN from "../../images/en.png";
import Logo from "../../images/logo.png";
import Cart from "../Cart/Cart";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.item}>
            <img src={EN} alt="UK/USA flag" />
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className={styles.center}>
          <NavLink className={styles.link} to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <ul className={styles.right}>
          <li className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.icons}>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className={styles.icon} onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className={styles.amount}>0</span>
            </div>
          </li>
        </ul>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
