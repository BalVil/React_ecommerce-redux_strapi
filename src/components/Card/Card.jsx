import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  // console.log(item);
  return (
    <>
      <Link to={`/product/${item?.id}`} className="cardLink">
        <div className="card">
          <ul className="cardImage">
            {item?.isNew && <span className="cardOption">New in</span>}
            <li>
              <img src={item?.image} alt={item?.title} className="mainImage" />
            </li>
            <li>
              <img
                src={item?.image2}
                alt={item?.title}
                className="secondImage"
              />
            </li>
          </ul>
          <h2 className="cardTitle">{item?.title}</h2>
          <ul className="priceList">
            {item?.oldPrice && <li className="price">{item?.oldPrice}€</li>}
            <li className="price">{item?.price}€</li>
          </ul>
        </div>
      </Link>
    </>
  );
}

export default Card;
