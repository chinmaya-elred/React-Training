import React, { lazy, Suspense } from 'react';

const LazyLoading = lazy(() => import('./index'));

const App = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};

export default App;
