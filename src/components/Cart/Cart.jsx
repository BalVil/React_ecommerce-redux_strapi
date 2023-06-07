import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

function Cart() {
  const data = [
    {
      id: 1,
      image:
        "/img/BestSellingProducts/david-bowie-the-rise-and-fall-of-ziggy-stardus.jpg",
      image2:
        "/img/BestSellingProducts/david-bowie-the-rise-and-fall-of-ziggy-stardus2.jpg",
      title:
        "David Bowie 'The Rise and fall of Ziggy Stardust' 500 Pce Jigsaw Puzzle",
      desc: "David Bowie’s “The Rise and Fall of Ziggy Stardust and the Spiders from Mars” 500 piece jigsaw puzzle making a great music gift.",
      isNew: true,
      oldPrice: 18.49,
      price: 17.99,
    },
    {
      id: 2,
      image: "/img/BestSellingProducts/cello-sterling-silver-charm.jpg",
      image2: "/img/BestSellingProducts/cello-sterling-silver-charm2.jpg",
      title: "Cello Sterling Silver Charm",
      desc: "Cello sterling silver charm with fantastic quality and detail making for any collector & nice music gift for any musician or music teacher or music student.",
      isNew: true,
      oldPrice: 23.0,
      price: 21.99,
    },
  ];

  return (
    <div className="cart">
      <h1 className="cartTitle">Products in your cart</h1>
      {data?.map((item) => (
        <div className="cartItem" key={item.id}>
          <img src={item.image} alt="" />
          <div className="details">
            <h2 className="cartItemTitle">{item.title}</h2>
            <p className="cartItemDesc">{item.desc?.substring(0, 100)}</p>
            <div className="cartItemPrice">1 x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>123€</span>
      </div>
      <button className="btn">PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
