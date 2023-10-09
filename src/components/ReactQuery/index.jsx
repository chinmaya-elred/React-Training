import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserList from './QueryComponent';
import MutationComponent from './ReactQueryMutation';
import UpdatingMutation from './UpdatingMutation'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <UserList />
        <h1>Mutation in react query Example</h1>
        <MutationComponent/>

        <h1 style={{ marginTop:' 50px'}}>Updating Mutation in react query Example</h1>
        <UpdatingMutation/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
