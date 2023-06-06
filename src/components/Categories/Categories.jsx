import { Link } from "react-router-dom";
import "./Categories.scss";

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/categories/accessories.jpg" alt="accessories" />
          <button>
            <Link to="/products/1" className="categoriesLink">
              Accessories
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/categories/jewellery.jpg" alt="jewellery" />
          <button>
            <Link to="/products/1" className="categoriesLink">
              Jewellery
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/categories/gift_sets.jpg" alt="gift sets" />
          <button>
            <Link to="/products/1" className="categoriesLink">
              Gift Sets
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/categories/clothing.jpg" alt="clothing" />
              <button>
                <Link to="/products/1" className="categoriesLink">
                  Clothing
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/categories/3d_cards.jpg" alt="3d cards" />
              <button>
                <Link to="/products/1" className="categoriesLink">
                  3D Cards
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/categories/memorabilia2.jpg" alt="memorabilia" />
          <button>
            <Link to="/products/1" className="categoriesLink">
              Memorabilia
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
