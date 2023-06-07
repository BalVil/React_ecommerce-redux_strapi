import "./BestSellingProducts.scss";
import bestSellingItems from "../../data/bestSellingProducts.json";
import Card from "../Card/Card";

function BestSellingProducts({ type }) {
  return (
    <div className="bestSelling">
      <div className="bestSellingTop">
        <h2 className="bestSellingTitle">{type} products</h2>
        <p className="bestSellingText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          delectus amet ducimus odio accusamus incidunt, nemo, repellat, quod
          explicabo distinctio voluptatem sequi. Blanditiis porro natus
          perferendis veniam nesciunt, sit quidem.
        </p>
      </div>
      <div className="bestSellingBottom">
        {bestSellingItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BestSellingProducts;
