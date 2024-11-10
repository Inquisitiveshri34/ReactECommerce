import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import HomeView from "./components/HomeView";
import NotificationHandler from "./components/NotificationHandler";
import LoadingError from "./components/LoadingError";
import {pageHandler} from "./helper.js"


const App = () => {
  const minPage = 1
  const maxPage = 8
  const [isLoading, setIsLoading] = useState(false);
  const [pageState, setPageState] = useState("Cart")
  const [pageNo, setPageNo] = useState(1)
  const [dataObj, setDataObj] = useState([])
  const [cartData,setCartData] = useState([])
  const [isTrue,setIsTrue] = useState(false)
  // const [filterDetails,setFilterDetails] = useState({lower: 0, upper: 5000})
  // const [url,setUrl]=useState(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${pageNo}&limit=5`)
  
  const fetchData = () => {
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${pageNo}&limit=5`)
    .then(response => {
      setDataObj(response.data.data)
      setIsLoading(false);
    })
      .catch(error => {
        console.log(error)
      });
  }
  useEffect(()=>{
    setIsLoading(true)
    setDataObj([])
    // setTimeout(()=>fetchData(),3000)
    fetchData()
  },[pageNo])

  const prevPage = () => {
    if (pageNo > minPage) {
    setPageNo(pageNo -1)
    }
  }
  const nextPage = () => {
    if (pageNo < maxPage) {
    setPageNo(pageNo+1)
    }
  }

  const setToTrue = () => {
    setIsTrue(true)
    setTimeout(()=>{setIsTrue(false)},1000)
  }

  const addtoCart = (details) => {
    setCartData((prevArr) => {
      if (!prevArr.some((item) => item.id === details.id)) {
          return [...prevArr, details];
      }
      return prevArr})
  }
  // useEffect(()=>{
  //   setUrl(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${pageNo}&limit=5&lower=${filterDetails.lower}&upper=${filterDetails.upper}`)
  // },[filterDetails])

  return (
    <div className="App">
      <Navbar page={pageState} action={() => {setPageState(pageHandler(pageState))}}/>
      {isLoading ? <p>Loading...</p> : null}
      {isTrue ? <NotificationHandler/> : null}
      {pageState=="Cart" ? 
        <HomeView dataObj={dataObj} prevBtnHandler={prevPage} nextBtnHandler={nextPage} btnFunc={addtoCart} toTrue={setToTrue}/> : 
        <Cart dataObj={cartData} btnFunc={addtoCart}/>
      }
    </div>
  );
};

export default App;
