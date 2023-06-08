import { useState } from "react";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import products from "../../data/products.json";
import "./Product.scss";

function Product() {
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);
  const catId = parseInt(useParams().id);

  let productItem = products.find((item) => item.id === catId);

  return (
    <div className="product">
      <div className="productLeft">
        <div className="productImages">
          <img
            src={productItem.image}
            alt={productItem.title}
            onClick={() => setSelectedImg("image")}
          />
          <img
            src={productItem.image2}
            alt={productItem.title}
            onClick={() => setSelectedImg("image2")}
          />
        </div>
        <div className="mainImg">
          <img src={productItem[selectedImg]} alt={productItem.title} />
        </div>
      </div>
      <div className="productRight">
        <h2>{productItem.title}</h2>
        <span className="price">{productItem.price}€</span>
        <p className="productText">{productItem.desc}</p>
        <div className="quantity">
          <button
            className="productBtn"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span className="quantityValue">{quantity}</span>
          <button
            className="productBtn"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="btn">
          <AddShoppingCartIcon />
          ORDER
        </button>
        <ul className="linkList">
          <li className="linkItem">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </li>
          <li className="linkItem">
            <BalanceIcon /> ADD TO COMPARE
          </li>
        </ul>
        <div className="addition">
          <span>Brand: {productItem.brand}</span>
          <span>Product Code: {productItem.productCode}</span>
          <span>Size: {productItem.size}</span>
        </div>
        <hr />
        <div className="info">
          <span className="infoItem">DESCRIPTION</span>
          <span className="infoItem">SPECIFICATIONS</span>
          <span className="infoItem">REVIEWS</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
