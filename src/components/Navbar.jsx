import React from "react";

const Navbar = ({page,action}) => (
  <nav>
    <button className="homeOrCart" onClick={action}> Go to {page}</button>
  </nav>
);

export default Navbar;
