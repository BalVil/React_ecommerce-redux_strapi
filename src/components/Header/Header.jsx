import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Container from "components/Container/Container";
import styles from "./Header.module.scss";
import EN from "../../images/en.png";
import Logo from "../../images/logo.png";
import Cart from "../Cart/Cart";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <div className={styles.language}>
              <img src={EN} alt="UK/USA flag" />
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className={styles.center}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.logo : styles.link
              }
              to="/"
            >
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
              <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
                <ShoppingCartOutlinedIcon />
                <span className={styles.amount}>{products.length}</span>
              </div>
            </li>
          </ul>
        </div>
      </Container>

      {isOpen && <Cart />}
    </header>
  );
}

export default Header;
