import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import TShirt from "../../img/TShirt.jpg";
import classes from "./Header.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TShirt Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => props.onAuthentication(e)}
        >
          Sign Out
        </motion.button>
      </header>
      <div className={classes["main-image"]}>
        <img src={TShirt} />
      </div>
    </Fragment>
  );
};

export default Header;
