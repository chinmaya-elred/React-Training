import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const ChildButton = forwardRef((props, ref) => {
  const buttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clickButton: () => {
      console.log('child')
      buttonRef.current.click();
    }
  }));

  return <button ref={buttonRef}>Click me!</button>;
});

export default ChildButton