import { useState, useCallback } from "react";
import InputComponent from "./input";

const UseCallbackComponent = () =>{
    const [inputValue, setInputValue] = useState('');
  
    const handleClick = useCallback(() => {
      alert(`Input value is: ${inputValue}`);
    }, [inputValue]);
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div style={{ marginTop: '50px'}}> 
        <h1>Input Value: {inputValue}</h1>
        <InputComponent handleClick={handleClick} />
        <br />
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>
    );
  }
  
  export default UseCallbackComponent;