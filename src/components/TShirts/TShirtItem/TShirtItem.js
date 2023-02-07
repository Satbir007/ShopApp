import React from "react";
import classes from "./TShirtItem.module.css";
import Tshirt from "../../../img/tshirt.png";

const TShirtItem = (props) => {
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
          </span>
        );
      })}
    </div>
  );
};

export default TShirtItem;
