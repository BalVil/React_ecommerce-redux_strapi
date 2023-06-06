import "./FeaturedProducts.scss";
import featuredItems from "../../data/featuredProducts.json";
import Card from "../Card/Card";

function FeaturedProducts({ type }) {
  return (
    <div className="featured">
      <div className="featuredTop">
        <h2 className="featuredTitle">{type}products</h2>
        <p className="featuredText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          delectus amet ducimus odio accusamus incidunt, nemo, repellat, quod
          explicabo distinctio voluptatem sequi. Blanditiis porro natus
          perferendis veniam nesciunt, sit quidem.
        </p>
      </div>
      <div className="featuredBottom">
        {featuredItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
