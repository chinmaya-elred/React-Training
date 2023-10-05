import { useState, useEffect } from 'react';
import Card from '../../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

// const NEW_DUMMY_MEALS = [
//   {
//     id: 'm5',
//     name: 'Pizza',
//     description: 'Italian classic',
//     price: 14.99,
//   },
//   {
//     id: 'm6',
//     name: 'Pad Thai',
//     description: 'Thai stir-fried noodles',
//     price: 13.5,
//   },
//   {
//     id: 'm7',
//     name: 'Steak',
//     description: 'Juicy and tender',
//     price: 20.99,
//   },
//   {
//     id: 'm8',
//     name: 'Caesar Salad',
//     description: 'Fresh and crispy',
//     price: 10.99,
//   },
// ];
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        return response.json();
      })
      .then(data => {
        setMeals(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const mealsList = meals.slice(0,4).map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;