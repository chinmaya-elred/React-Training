import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import ChildButton from './Child'

const ParentComponent = () => {
    const childButtonRef = useRef(null);
  
    const handleClick = () => {
      childButtonRef.current.clickButton();
    };
  
    return (
      <div>
        <ChildButton ref={childButtonRef} />
        <button onClick={handleClick}>Parent Click</button>
      </div>
    );
  };
  
  export default ParentComponent;