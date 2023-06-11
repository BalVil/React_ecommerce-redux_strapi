import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "redux/cartSlice";
import { useState } from "react";
import Payment from "components/Payment/Payment";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  const total = products
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <div className={styles.cart}>
        <h1 className={styles.title}>Products in your cart</h1>
        {products?.map((item) => (
          <div className={styles.item} key={item.id}>
            <img src={item.image} alt={item.image} />
            <div className={styles.details}>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <p className={styles.itemDesc}>{item.desc?.substring(0, 100)}</p>
              <div className={styles.itemPrice}>
                {item.quantity} x {item.price}
              </div>
            </div>
            <DeleteOutlinedIcon
              className={styles.delete}
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))}
        <div className={styles.total}>
          <span>SUBTOTAL</span>
          <span>{total}€</span>
        </div>
        <button className={styles.btn} onClick={() => setIsOpen(true)}>
          PROCEED TO CHECKOUT
        </button>
        <span className={styles.reset} onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      </div>

      {isOpen && products.length > 0 && <Payment showPayment={setIsOpen} />}
    </>
  );
}

export default Cart;
