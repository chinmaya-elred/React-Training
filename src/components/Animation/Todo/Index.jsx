import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddNewtask';
import './index.css';

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const removeTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = taskId => {
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div className="container">
      <h1>Animated ToDo List</h1>
      <AddTaskForm onAdd={addTask} /><br/>
      <TaskList
        tasks={tasks}
        onRemove={removeTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default Todo;
