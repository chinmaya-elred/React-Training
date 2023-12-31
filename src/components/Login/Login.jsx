import React, { useState } from 'react';
import './Login.css'

const ConditionalRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, User!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
