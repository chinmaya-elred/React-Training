
import React from 'react';
import Task from './Task';
import './index.css';

const TaskList = ({ tasks, onRemove, onToggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onRemove={onRemove}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
