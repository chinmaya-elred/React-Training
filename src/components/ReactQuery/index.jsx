import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserList from './QueryComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <UserList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
