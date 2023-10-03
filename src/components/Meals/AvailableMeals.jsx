import Card from '../../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const NEW_DUMMY_MEALS = [
  {
    id: 'm5',
    name: 'Pizza',
    description: 'Italian classic',
    price: 14.99,
  },
  {
    id: 'm6',
    name: 'Pad Thai',
    description: 'Thai stir-fried noodles',
    price: 13.5,
  },
  {
    id: 'm7',
    name: 'Steak',
    description: 'Juicy and tender',
    price: 20.99,
  },
  {
    id: 'm8',
    name: 'Caesar Salad',
    description: 'Fresh and crispy',
    price: 10.99,
  },
];

const AvailableMeals = () => {
  const mealsList = NEW_DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
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
