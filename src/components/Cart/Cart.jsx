import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  const total = products
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h1 className="cartTitle">Products in your cart</h1>
      {products?.map((item) => (
        <div className="cartItem" key={item.id}>
          <img src={item.image} alt="" />
          <div className="details">
            <h2 className="cartItemTitle">{item.title}</h2>
            <p className="cartItemDesc">{item.desc?.substring(0, 100)}</p>
            <div className="cartItemPrice">
              {item.quantity} x {item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>{total}€</span>
      </div>
      <button className="btn">PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
