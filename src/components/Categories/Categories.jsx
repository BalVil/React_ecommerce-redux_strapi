import { Link, NavLink } from "react-router-dom";
import "./Categories.scss";

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/categories/gifts.jpg" alt="gifts" />

          <NavLink to="/products/1" className="categoriesLink">
            Gifts
          </NavLink>
        </div>
        <div className="row">
          <img src="/img/categories/jewellery.jpg" alt="jewellery" />

          <NavLink to="/products/1" className="categoriesLink">
            Jewellery
          </NavLink>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/categories/accessories.jpg" alt="accessories" />

          <NavLink to="/products/1" className="categoriesLink">
            Accessories
          </NavLink>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/categories/clothing.jpg" alt="clothing" />

              <Link to="/products/1" className="categoriesLink">
                Clothing
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/categories/3d_cards.jpg" alt="3d cards" />

              <Link to="/products/1" className="categoriesLink">
                3D Cards
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/categories/memorabilia2.jpg" alt="memorabilia" />

          <Link to="/products/1" className="categoriesLink">
            Memorabilia
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
