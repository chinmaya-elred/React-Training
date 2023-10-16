import React from 'react';

const ChildComponent1 = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <h2>Child Component 1</h2>
      <input type="text" value={data} onChange={handleChange} />
    </div>
  );
};

export default ChildComponent1;
