import React from 'react';
import { useTheme } from './index';

const ThemedComponent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      Themed Content
    </div>
  );
};

export default ThemedComponent;
