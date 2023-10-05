import React from 'react';
import useFetch from './httpHook';

function DataComponent() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) {
    return <div>Loading...</div>;
  }

  const firstFiveTodos = data.slice(0, 5);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {firstFiveTodos.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;
