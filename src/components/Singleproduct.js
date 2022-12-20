import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import "../css/Singleproduct.css";
import ReactLoading from 'react-loading';


function Singleproduct() {
  const [quantity, setQuantity] = useState(0);
  const API = "https://fakestoreapi.com/products";

  const { id } = useParams();
  const {addtocart, getSingleData, SingleLoading, SingleProduct } =
    useContext(AppContext);

  const rate = 4.7;
  const count = 120;
  
  const starArr = [];
if(Math.floor(rate)!==rate){
  for (let i = 0; i < Math.floor(rate); i++) {
    starArr.push(<AiFillStar style={{fontSize:'14px'}}/>);
  }
  starArr.push(<BsStarHalf style={{fontSize:'13px'}}/>);
  for (let j = 0; j < 4 - Math.round(rate); j++) {
    starArr.push(<AiOutlineStar style={{fontSize:'14px'}}/>);
  }

} else{
  for (let i = 0; i < Math.floor(rate); i++) {
    starArr.push(<AiFillStar style={{fontSize:'14px'}}/>);
  }
  for (let j = 0; j < 5 - Math.round(rate); j++) {
    starArr.push(<AiOutlineStar style={{fontSize:'14px'}}/>);
  }
}

//cart products
const cartProduct = {
  id: SingleProduct.id,
  title: SingleProduct.title,
  price: SingleProduct.price,
  quantity: quantity
}
const handleClick = () => {
  alert("item added");
  addtocart(cartProduct)
}
//other stuffs
  

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    getSingleData(`${API}/${id}`);
    console.log(SingleProduct.rating);
  }, []);
  if (SingleLoading) {
    return <div className='grid-container'><ReactLoading type='balls' color='black' height={200} width={200}/></div>;
  } else {
    return (
      <div className="grid-container">
        <div className="item1">
          <img
            src={SingleProduct.image}
            alt="songle"
            style={{ width: "40%" }}
          />
          <img
            src={SingleProduct.image}
            alt="songle"
            style={{ width: "40%" }}
          />
          <img
            src={SingleProduct.image}
            alt="songle"
            style={{ width: "40%" }}
          />
        </div>
        <div className="item2">
          <img
            src={SingleProduct.image}
            alt="songle"
            style={{ width: "70%" }}
          />
        </div>
        <div className="item3">
          <h3>{SingleProduct.title}</h3>

          <p>
            <span style={{color:'rgb(247, 159, 28)', marginRight:'7px'}}>{starArr.map((i)=>{
              return i;
            })}</span>
            <span style={{ color: "grey" }}>({count} customer reveiws)</span>
          </p>

          <p>
            <span style={{ fontWeight: "bolder" }}>MRP:</span> $
            <s>{SingleProduct.price}</s>
          </p>
          <p style={{ color: "blueviolet" }}>
            Deal of the day ${Math.floor(SingleProduct.price * 0.8)}
          </p>
          <p>{SingleProduct.description}</p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Available:</span> In stock
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Category:</span>{" "}
            {SingleProduct.category}
          </p>
          <div className="quantity">
            <button className="button" onClick={handleAdd}>
              +
            </button>
            <p style={{ margin: "2.5px" }}>{quantity}</p>
            <button
              className="button"
              style={{ marginLeft: "5px" }}
              onClick={handleMinus}
            >
              -
            </button>
          </div>

          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Singleproduct;
