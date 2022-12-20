import React  from "react";
import "../css/Products.css";
import Main from "./productComponent/Main";
import Sidebar from "./productComponent/Sidebar";

function Products() {
  
  return (
    <div className="product__container">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default Products;
