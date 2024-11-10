import React from "react";
import "./ProductItem.css"

const ProductItem = ({item, btnFunc, toTrue}) => {

  const btnHandler = () => {
    btnFunc(item)
    toTrue(item)
  }
  return (
    <div className="product-item">
      <img className="prImage" src={item.image} alt="img" />
      <p className="prTitle">{item.title}</p>
      <p className="prBrand">{item.brand}</p>
      <p className="prCategory">{item.category}</p>
      <p className="prPrice">{item.price}</p>
      <button className="buyBtn" onClick={btnHandler}>Add to Cart</button>
    </div>
);
};

export default ProductItem;
