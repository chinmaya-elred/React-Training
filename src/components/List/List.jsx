import React from 'react';
import './List.css'

const ListItem = ({ item }) => {
  return <li>{item}</li>;
};

const List = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default List;
