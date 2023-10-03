import classes from './CartItem.module.css';

const UpdatedCartItem = (props) => {
  const updatedPrice = `$${props.updatedPrice.toFixed(2)}`;

  return (
    <li className={classes['updated-cart-item']}>
      <div>
        <h2>{props.updatedName}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{updatedPrice}</span>
          <span className={classes.amount}>x {props.updatedAmount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveItem}>−</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </li>
  );
};

export default UpdatedCartItem;