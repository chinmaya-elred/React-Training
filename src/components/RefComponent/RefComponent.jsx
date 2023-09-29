import React, { useRef } from 'react';
import './Ref.css'

const MyFunctionalComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div className='container'>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default MyFunctionalComponent;
