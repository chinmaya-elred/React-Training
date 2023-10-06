import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Action/action';

const ClassCounter = ({ count, increment, decrement }) => {
  return (
    <div>
        <h1>Classbased Redux</h1>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
