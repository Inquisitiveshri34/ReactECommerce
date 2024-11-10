import React from "react";
import ProductList from "./ProductList";

const Cart = ({dataObj,btnFunc}) => {
  return (
    <div className="cart">
      <div className="main-container">
        <ProductList dataObj={dataObj} btnFunc={btnFunc}/>
      </div>
    </div>
  );
};

export default Cart;
