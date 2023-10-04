import React, { useState } from 'react';
import ItemList from './Items'

function MemoComponent() {
    const items = ['Apple', 'Banana', 'Cherry'];
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div style={{ marginTop: '50px'}}>
        <button onClick={handleClick}>Increment Count</button>
        <p>{count}</p>
        <ItemList items={items} />
      </div>
    );
  }
  
  export default MemoComponent;