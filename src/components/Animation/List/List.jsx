import React, { useState } from 'react';
import './List.css'; 

const ListAnimation = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAnimation;
