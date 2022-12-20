import React, { useContext } from "react";
import "../css/Cart.css";
import Button from "react-bootstrap/Button";
import { AppContext } from "../contexts/context";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Cart() {
  const { user } = useAuth0();

  //other stuffs
  const { cartProd, deleteCart } = useContext(AppContext);
  const CartTotal = cartProd.reduce((initial, i) => {
    initial = initial + i.price * i.quantity;
    return initial;
  }, 0);

  //not allowing product of same id to be added in cart

  return (
    <div className="cart__container">
      <h3 style={{marginBottom:"20px"}}>Hi {user.name}</h3>
      <Table striped hover>
        <thead>
          <tr>
            <th>s.no</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartProd.map((i) => {
            return (
              <tr style={{ cursor: "pointer" }} key={i.id}>
                  <td><NavLink
                  to={`/product/${i.id}`}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    width: "200%",
                  }}
                >{cartProd.indexOf(i) + 1}</NavLink></td>
                  <td><NavLink
                  to={`/product/${i.id}`}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    width: "200%",
                  }}
                >{i.title}</NavLink></td>
                  <td><NavLink
                  to={`/product/${i.id}`}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    width: "200%",
                  }}
                >{i.price}</NavLink></td>
                  <td><NavLink
                  to={`/product/${i.id}`}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    width: "200%",
                  }}
                >{i.quantity}</NavLink></td>
                  <td><NavLink
                  to={`/product/${i.id}`}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    width: "200%",
                  }}
                >{i.price * i.quantity}</NavLink></td>
                  <td onClick={() => deleteCart(i.id)}>
                    <AiFillDelete />
                  </td>
                
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p style={{ marginTop: "30px", fontSize: "15px" }}>
        <span style={{ fontWeight: "650" }}>Subtotal:</span> ${CartTotal}
      </p>
      <Button variant="primary" style={{ marginTop: "20px" }}>
        Buy Now
      </Button>
    </div>
  );
}

export default Cart;
