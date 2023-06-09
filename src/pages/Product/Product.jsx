import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { addToCart } from "redux/cartSlice";
import products from "../../data/products.json";
import styles from "./Product.module.scss";

function Product() {
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);
  const catId = parseInt(useParams().id);
  const dispatch = useDispatch();

  let productItem = products.find((item) => item.id === catId);

  const cartProduct = {
    id: productItem.id,
    title: productItem.title,
    desc: productItem.desc,
    image: productItem.image,
    price: productItem.price,
    quantity,
  };

  return (
    <div className={styles.product}>
      <div className={styles.product}>
        <div className={styles.images}>
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
        <div className={styles.mainImg}>
          <img src={productItem[selectedImg]} alt={productItem.title} />
        </div>
      </div>
      <div className={styles.right}>
        <h2>{productItem.title}</h2>
        <span className={styles.price}>{productItem.price}€</span>
        <p className={styles.right}>{productItem.desc}</p>
        <div className={styles.quantity}>
          <button
            className={styles.productBtn}
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span className={styles.quantityValue}>{quantity}</span>
          <button
            className={styles.productBtn}
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className={styles.btn}
          onClick={() => dispatch(addToCart(cartProduct))}
        >
          <AddShoppingCartIcon />
          ORDER
        </button>
        <ul className={styles.linkList}>
          <li className={styles.link}>
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </li>
          <li className={styles.link}>
            <BalanceIcon /> ADD TO COMPARE
          </li>
        </ul>
        <div className={styles.addition}>
          <span>Brand: {productItem.brand}</span>
          <span>Product Code: {productItem.productCode}</span>
          <span>Size: {productItem.size}</span>
        </div>
        <hr />
        <div className={styles.info}>
          <span className={styles.infoItem}>DESCRIPTION</span>
          <span className={styles.infoItem}>SPECIFICATIONS</span>
          <span className={styles.infoItem}>REVIEWS</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
