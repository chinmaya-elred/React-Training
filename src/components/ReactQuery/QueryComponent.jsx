import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError, error } = useQuery('users', fetchUsers, {
    staleTime: 5000, 
    cacheTime: 6000, 
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const filteredUsers = data.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
