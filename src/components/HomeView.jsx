// HomeView.jsx
import React from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";

const HomeView = ({dataObj,prevBtnHandler,nextBtnHandler, btnFunc, toTrue}) => {
  return (<>
    <Filter/>
    <div className="main-container">
      <Pagination prevBtnHandler={prevBtnHandler} nextBtnHandler={nextBtnHandler} dataObj={dataObj} btnFunc={btnFunc} toTrue={toTrue}/>
    </div>
  </>)
};

export default HomeView;
