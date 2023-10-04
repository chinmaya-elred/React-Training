import React, { useState } from 'react';

function Batching() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log('Current Count:', count);

    setCount(count + 1);
    console.log('Current Count:', count);

    setCount(count + 1);
    console.log('Current Count:', count);
  };

  return (
    <div style={{ marginTop: '50px'}}>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default Batching;
