import { Link, NavLink } from "react-router-dom";
import styles from "./Categories.module.scss";

function Categories() {
  return (
    <div className={styles.categories}>
      <h2 className="title">Categories</h2>
      <div className="col">
        <div className="row">
          <img src="/img/categories/gifts.jpg" alt="gifts" />

          <NavLink to="/products/gifts" className="categoriesLink">
            Gifts
          </NavLink>
        </div>
        <div className="row">
          <img src="/img/categories/jewellery.jpg" alt="jewellery" />

          <NavLink to="/products/jewellery" className="categoriesLink">
            Jewellery
          </NavLink>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/categories/accessories.jpg" alt="accessories" />

          <NavLink to="/products/accessories" className="categoriesLink">
            Accessories
          </NavLink>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/categories/clothing.jpg" alt="clothing" />

              <Link to="/products/clothing" className="categoriesLink">
                Clothing
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/categories/3d_cards.jpg" alt="3d cards" />

              <Link to="/products/3d_cards" className="categoriesLink">
                3D Cards
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/categories/memorabilia2.jpg" alt="memorabilia" />

          <Link to="/products/memorabilia" className="categoriesLink">
            Memorabilia
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
