import { useState } from "react";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import bestSellingItems from "../../data/bestSellingProducts.json";
import "./Product.scss";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  return (
    <div className="product">
      <div className="productLeft">
        <div className="productImages">
          <img
            src={bestSellingItems[0].image}
            alt=""
            onClick={() => setSelectedImg(0)}
          />
          <img
            src={bestSellingItems[1].image}
            alt=""
            onClick={() => setSelectedImg(1)}
          />
        </div>
        <div className="mainImg">
          <img src={bestSellingItems[selectedImg]?.image} alt="" />
        </div>
      </div>
      <div className="productRight">
        <h2>Title</h2>
        <span className="price">199€</span>
        <p className="productText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero
          deserunt temporibus reiciendis placeat, voluptates minima. Corrupti,
          exercitationem similique eligendi numquam officiis velit a nostrum
          fuga praesentium sunt neque eaque?
        </p>
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
          <span>Brand: Polo</span>
          <span>Product Code: T-Shirt</span>
          <span>Size: Approx. 10.5 x 10.5cm</span>
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
