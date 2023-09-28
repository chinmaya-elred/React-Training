import React, { useState } from 'react';
import InputField from './child';

const Parent = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (value) => {
      setInputValue(value);
    };
  
    return (
      <div >
        <InputField value={inputValue} onChange={handleInputChange} />
        <div>Input Value: {inputValue}</div>
      </div>
    );
  };
  
  export default Parent;