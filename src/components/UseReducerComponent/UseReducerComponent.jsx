import React, { useReducer, useState } from 'react';

const initialState = {
  todos: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { todos: [...state.todos, action.payload] };
    case 'remove':
      return { todos: state.todos.filter(todo => todo.id !== action.payload.id) };
    default:
      return state;
  }
};

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      dispatch({ type: 'add', payload: { id: Date.now(), text: todoText } });
      setTodoText('');
    }
  };

  const removeTodo = (todo) => {
    dispatch({ type: 'remove', payload: { id: todo.id } });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
