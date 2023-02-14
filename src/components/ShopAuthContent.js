import React from "react";
import Cart from "./Cart/Cart";
import { useState } from "react";
import Header from "./Layout/Header";
import TShirt from "./TShirts/TShirt";
import "../css/main.css";
import CartProvider from "../store/CartProvider";

const ShopAuthContent = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header
        onShowCart={showCartHandler}
        onAuthentication={props.onAuthentication}
      />
      <main>
        <TShirt />
      </main>
    </CartProvider>
  );
};

export default ShopAuthContent;
