import React from 'react';
import UserComponent from './useContext';
import { UserContextProvider } from './contentAPI';

const ContextExample = () => {
  return (
    <div>
      <h1>UseContext Example</h1>
      <UserContextProvider>
        <UserComponent />
      </UserContextProvider>
    </div>
  );
};

export default ContextExample;
