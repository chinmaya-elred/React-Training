import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const updateUser = async (userId, updatedUser) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser);
  return response.data;
};

const MutationComponent = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users'); 
      alert('User updated successfully!');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = e.target.userId.value;
    const name = e.target.name.value;
    const email = e.target.email.value;

    mutation.mutate(userId, { name, email }); 
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" name="userId" />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Updating...' : 'Update User'}
      </button>
    </form>
  );
};

export default MutationComponent;
