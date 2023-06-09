import styles from "./ProductsBlock.module.scss";
import products from "../../data/products.json";
import Card from "../Card/Card";

function ProductsBlock({ type }) {
  return (
    <div className={styles[type] || styles.products}>
      <div className={styles.top}>
        <h2 className={styles.title}>{type}</h2>
      </div>
      <div className={styles.bottom}>
        {products?.map((item) =>
          item.type === type ? <Card item={item} key={item.id} /> : null
        )}
      </div>
    </div>
  );
}

export default ProductsBlock;
