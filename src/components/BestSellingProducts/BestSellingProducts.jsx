import "./BestSellingProducts.scss";
import bestSellingItems from "../../data/products.json";
import Card from "../Card/Card";

function BestSellingProducts({ type }) {
  return (
    <div className="bestSelling">
      <div className="bestSellingTop">
        <h2 className="bestSellingTitle">{type}</h2>
      </div>
      <div className="bestSellingBottom">
        {bestSellingItems?.map((item) => {
          if (item.type === type) {
            return <Card item={item} key={item.id} />;
          }
        })}
      </div>
    </div>
  );
}

export default BestSellingProducts;
