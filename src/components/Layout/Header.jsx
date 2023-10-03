import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assetes/image/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  const showCartHandler = () => {
    props.onShowCart();
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals APP</h1>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
