import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg";
import "../css/Nav.css";
import LoginButton from "./LoginPopup";
function Nav() {
  const [isClicked, setClicked] = useState("none");
  const [isClickprev, setClickprev] = useState("block")
  const handleClick = () => {
    if (isClickprev === "block" && window.innerWidth === 768) {
        setClickprev("none")
    } else{
        setClickprev("block")
    }
    if (isClicked === "block" && window.innerWidth === 768) {
        setClicked("none");
    } else{
        setClicked("block")
    }
  };
  return (
    <>
    <div className="nav">
      <ul className="nav__list">
        <li>
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav__link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav__link">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="nav__link"
            style={{ paddingRight: "10px" }}
          >
            <BsFillCartFill />
          </NavLink>
        </li>
      </ul>
      <CgMenu className="cgmenu menu" onClick={handleClick} style={{display: "none"}}/>
      
    </div>
    <div className="afterClick" style={{display: isClicked}}>
    <CgClose className="cgclose close" onClick={handleClick} style={{float: "right"}}/>
    <ul className="nav__list__close">
      <li>
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="nav__link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="nav__link">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className="nav__link">
          Products
        </NavLink>
      </li>
      <li><LoginButton/></li>
      
      <li>
        <NavLink
          to="/cart"
          className="nav__link"
          style={{ paddingRight: "10px" }}
        >
          <BsFillCartFill />
        </NavLink>
      </li>
    </ul>
  </div>
  </>
  );
}

export default Nav;
