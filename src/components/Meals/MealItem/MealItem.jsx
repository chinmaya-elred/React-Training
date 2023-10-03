import { useState, useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const UpdatedMealItem = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const cartCtx = useContext(CartContext);

  const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState);
  };

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log(cartCtx)
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {isFormVisible && <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>}
        <button onClick={toggleFormVisibility}>Show Form</button>
      </div>
    </li>
  );
};

export default UpdatedMealItem;
