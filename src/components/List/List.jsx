// import gifts from "../../data/gifts.json";
import featuredItems from "../../data/featuredProducts.json";
import Card from "../Card/Card";
import "./List.scss";

import React from "react";

function List({ catId }) {
  return (
    <div className="list">
      {featuredItems?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
