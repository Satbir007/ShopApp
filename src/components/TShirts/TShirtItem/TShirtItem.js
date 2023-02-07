import React from "react";
import { useContext } from 'react';
import classes from "./TShirtItem.module.css";
import Tshirt from "../../../img/tshirt.png";
import TShirtItemForm from "./TShirtItemForm";
import CartContext from '../../../store/cart-context';


const TShirtItem = (props) => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: props.products.id,
          name: props.products.title,
          amount: amount,
          price: props.products.price,
        });
      };

  return (
    <div className={classes.products}>
      {props.products.slice(props.page * 5 - 5, props.page * 5).map((prod) => {
        return (
          <span className={classes.products__single} key={prod.id}>
            <span className={classes.product__image}>
              <img src={Tshirt} alt="tshirt" />
            </span>
            <span>{prod.title}</span>
            <span>
              {prod.currencyFormat}
              {prod.price.toFixed(2)}
            </span>
            <span><TShirtItemForm id={prod.id} onAddToCart={addToCartHandler}/></span>
          </span>
        );
      })}
    </div>
  );
};

export default TShirtItem;
