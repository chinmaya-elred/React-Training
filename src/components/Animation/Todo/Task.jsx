// src/Task.js
import React from 'react';
import { motion } from 'framer-motion';
import './index.css'; 

const Task = ({ task, onRemove, onToggleComplete }) => {
  return (
    <motion.div
      className={`task ${task.completed ? 'completed' : ''}`}
      whileHover={{ scale: 1.05 }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span className='taskTitle'>{task.text}</span>
      <button onClick={() => onRemove(task.id)}>Remove</button>
    </motion.div>
  );
};

export default Task;
