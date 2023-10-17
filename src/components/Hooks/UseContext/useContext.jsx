import React, { useContext } from 'react';
import { UserContext } from './contentAPI';

const UserComponent = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({ username: 'john_doe', isLoggedIn: true });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default UserComponent;
