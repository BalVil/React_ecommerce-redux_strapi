// import gifts from "../../data/gifts.json";
import bestSellingItems from "../../data/bestSellingProducts.json";
import Card from "../Card/Card";
import "./List.scss";

import React from "react";

function List({ catId }) {
  return (
    <div className="list">
      {bestSellingItems?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
