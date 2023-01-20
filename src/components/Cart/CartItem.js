import CartContext from "../../store/cart-context";
import { Fragment, useContext } from "react";
import classes from './CartItem.module.css'
import axios from "axios";

import React from "react";

const CartItem = (props) => {
  console.log("inside cartItem",props)

  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  const cartCntx = useContext(CartContext);
  const onAddHandler = () => {
    console.log(props)

    cartCntx.addItem({...props})

    axios
    .post(
      `https://crudcrud.com/api/60dd19a7917443068230445a9fcc8153/cart${email}`, props)
    .then((res) => {
      console.log(res.data, "Successfull");
    })
    .catch((error) => {
      alert(error);
    });
  };

  const onRemoveHandler = (event) => {

    cartCntx.removeItem(props);
    const id= (props.id);
    console.log(id)
    axios.delete( `https://crudcrud.com/api/60dd19a7917443068230445a9fcc8153/cart${email}/${id}`)

    

  };


return (
    <li id={`cart-item-${props.id}`}>
      <Fragment>
          <h2 className={classes.title}>{props.title}</h2>
          <img src= {props.img } alt="Icon" className={classes.img}></img>
          <span className={classes.price}> ₹ {props.price}</span>
          <span> x {props.quantity}</span>
          <button onClick={onAddHandler} className={classes.button}>+</button>
          <button onClick={onRemoveHandler} className={classes.button}>-</button>
      </Fragment>
    </li>
)

};

export default CartItem;