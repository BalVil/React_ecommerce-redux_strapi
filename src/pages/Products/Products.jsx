import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import productImg from "../../images/product.jpg";
import "./Products.scss";

function Products() {
  const cat = useParams().category;
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <ul className="productsLeft">
        <li className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </li>
        <li className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </li>
      </ul>
      <div className="productsRight">
        <img src={productImg} alt="products" className="catImg" />
        <List cat={cat} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}

export default Products;
