import React from 'react';
import { ThemeProvider } from './index';
import ThemeToggle from './ThemeToggle';
import ThemedComponent from './ThemedComponent';

const ContextAPI = () => {
  return (
    <ThemeProvider>
      <div className="ContextAPI">
        <ThemeToggle />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default ContextAPI;
