import React, { useState, useCallback } from 'react';

function InputComponent({ handleClick }) {
  console.log('Rendering InputComponent');
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default InputComponent