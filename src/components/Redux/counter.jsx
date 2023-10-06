import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './Slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  
    const handleIncrementByAmount = () => {
      const amount = 10;
      dispatch(incrementByAmount(amount));
    };
  
    return (
      <div>
        <h1>Functional Component with Slices</h1>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={handleIncrementByAmount}>Increment by 10</button>
      </div>
    );
  };
  
  export default Counter;