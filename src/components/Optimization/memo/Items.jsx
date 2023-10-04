import React from 'react';

const Item = React.memo(function Item({ name }) {
  console.log(`Rendering Item ${name}`);
  return <div>{name}</div>;
});

function ItemList({ items }) {
  return (
    <div>
      {items.map(item => (
        <Item key={item} name={item} />
      ))}
    </div>
  );
}
export default ItemList