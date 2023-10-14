import React from 'react';
import Todo from './Todo';
import { TodoProvider } from './TodoContext';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="App">
        <Todo />
      </div>
    </TodoProvider>
  );
};

export default App;
