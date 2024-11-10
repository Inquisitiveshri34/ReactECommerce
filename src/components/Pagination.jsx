import React from "react";
import ProductList from "./ProductList";
import "./Pagination.css"

const Pagination = ({dataObj,prevBtnHandler,nextBtnHandler, btnFunc, toTrue}) => (
  <div className="pagination">
    <button className="prevBtn" onClick={prevBtnHandler}>Prev</button>
    <ProductList dataObj={dataObj} btnFunc={btnFunc} toTrue={toTrue}/>
    <button className="nextBtn" onClick={nextBtnHandler}>Next</button>
  </div>
);

export default Pagination;
