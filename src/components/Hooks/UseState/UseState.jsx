import React, { useState } from 'react';
import ChildComponent1 from './child';

const ParentComponent = () => {
  const [data, setData] = useState('');
  const [showChild1, setShowChild1] = useState(false);

  const toggleChild1 = () => {
    setShowChild1(!showChild1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={toggleChild1}>
        {showChild1 ? 'Hide Child 1' : 'Show Child 1'}
      </button>
      {showChild1 && <ChildComponent1 data={data} setData={setData} />}

    </div>
  );
};

export default ParentComponent;
