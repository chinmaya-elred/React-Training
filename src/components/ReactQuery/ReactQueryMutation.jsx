import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const createUser = async (newUser) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
  return response.data;
};

const MutationComponent = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      alert('User created successfully!');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    mutation.mutate({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
};

export default MutationComponent;
