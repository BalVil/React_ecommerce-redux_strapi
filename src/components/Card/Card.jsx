import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ item }) {
  return (
    <>
      <Link to={`/product/${item?.id}`}>
        <div className={styles.card}>
          <ul className={styles.cardImage}>
            {item?.isNew && <span className={styles.option}>New in</span>}
            <li>
              <img
                src={item?.image}
                alt={item?.title}
                className={styles.mainImage}
              />
            </li>
            <li>
              <img
                src={item?.image2}
                alt={item?.title}
                className={styles.secondImage}
              />
            </li>
          </ul>
          <h2 className={styles.title}>{item?.title}</h2>
          <ul className={styles.priceList}>
            {item?.oldPrice && (
              <li className={styles.oldPrice}>{item?.oldPrice}€</li>
            )}
            <li className={styles.price}>{item?.price}€</li>
          </ul>
        </div>
      </Link>
    </>
  );
}

export default Card;
