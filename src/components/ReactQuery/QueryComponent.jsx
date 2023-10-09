import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const UserList = () => {
  const { data, isLoading, error } = useQuery('users', fetchUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
