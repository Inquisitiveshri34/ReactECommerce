import React from "react";

const Filter = () => {
  
  // const filterHandler = (event) => {
  //   const { name, value } = event.target;
  //   setFilterDetails((prevObj) => {
  //     console.log(prevObj)
  //     return { ...prevObj, [name]: value }
  // });
  // }
  return (
  <div className="filter">
    {/* <input type="number" name="lower" id="lower" min="0" onChange={filterHandler}/>
    <input type="number" name="upper" id="upper" min="0" onChange={filterHandler}/> */}
    <p>Filter</p>
  </div>
  );
};

export default Filter;
