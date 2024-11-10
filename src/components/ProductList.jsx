import React from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css"

const ProductList = ({dataObj,btnFunc,toTrue}) => {
  return (
    <div className="product-list">
      {console.log(dataObj)}
      {dataObj.length ===0 ? 
      <p>No items</p> : 
      dataObj.map((el)=><ProductItem key={el.id} item={el} btnFunc={btnFunc} toTrue={toTrue}/>)}
    </div> 
  );
};

export default ProductList;
