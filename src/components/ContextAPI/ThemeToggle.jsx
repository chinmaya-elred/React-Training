import React from 'react';
import { useTheme } from './index';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})
    </button>
  );
};

export default ThemeToggle;
