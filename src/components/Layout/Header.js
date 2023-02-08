import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
// import TShirt from '../../img/Tshirt.jpg';
import TShirt from '../../img/TShirt.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TShirt Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <button  onClick={(e) => props.onAuthentication(e)}>Sign Out</button>
      </header>
      <div className={classes['main-image']}>
        <img src={TShirt} alt='A Shop full of TShirts' />
      </div>
    </Fragment>
  );
};

export default Header;