import React, { useState } from 'react';

const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = async (e) => {
   e.preventDefault();

   try {
     const response = await fetch('http://localhost:3000/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ username, password }),
     });

     const data = await response.json();

     if (data.token) {
       localStorage.setItem('token', data.token);
       console.log('Login successful!');
     } else {
       console.error(data.error);
     }
   } catch (error) {
     console.error('Error:', error);
   }
 };

 return (
   <form onSubmit={handleLogin}>
     <div>
       <label>Username:</label>
       <input
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
       />
     </div>
     <div>
       <label>Password:</label>
       <input
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
       />
     </div>
     <button type="submit">Login</button>
   </form>
 );
};

export default Login;
