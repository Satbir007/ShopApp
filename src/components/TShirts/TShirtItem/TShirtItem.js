import React from "react";
import { useContext } from 'react';
import classes from "./TShirtItem.module.css";
import Tshirt from "../../../img/tshirt.png";
import TShirtItemForm from "./TShirtItemForm";
import CartContext from '../../../store/cart-context';
import FilterContext from "../../../store/filter-context";

const TShirtItem = (props) => {

    const cartCtx = useContext(CartContext);
    const [val,setVal]= useContext(FilterContext);

    const addToCartHandler = (id, title, price, amount =1) => {
        cartCtx.addItem({
          id: id,
          name: title,
          amount: amount,
          price: price,
        });
      };

  return (
    <div className={classes.products}>
      {props.products.slice(props.page * 5 - 5, props.page * 5).map((prod) => {
        if( val!=="" && prod.availableSizes.includes(val)){
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
            <span><TShirtItemForm id={prod.id} title={prod.title} price={ prod.price} onAddToCart={addToCartHandler}/></span>
          </span>
          );
        }
        else{
          return (val ==="" &&
          <span className={classes.products__single} key={prod.id}>
            <span className={classes.product__image}>
              <img src={Tshirt} alt="tshirt" />
            </span>
            <span>{prod.title}</span>
            <span>
              {prod.currencyFormat}
              {prod.price.toFixed(2)}
            </span>
            <span><TShirtItemForm id={prod.id} title={prod.title} price={ prod.price} onAddToCart={addToCartHandler}/></span>
          </span>);
          
        }
        
      })}
    </div>
  );
};

export default TShirtItem;
