import styles from "./Products.module.scss";
import products from "../../data/products.json";
import Card from "../Card/Card";

function Products({ type }) {
  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <h2 className={styles.title}>{type}</h2>
      </div>
      <div className={styles.bottom}>
        {products?.map((item) => {
          if (item.type === type) {
            return <Card item={item} key={item.id} />;
          }
        })}
      </div>
    </div>
  );
}

export default Products;
