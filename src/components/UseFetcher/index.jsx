import React from 'react';
import useFetcher from './UseFetcher';

const MyComponent = () => {
  const { data, loading, error } = useFetcher('https://dummyjson.com/products');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{data.products.slice(0,5).map((i) =>{
        return(
            <p>{i.title}</p>
        )
      })}</pre>
    </div>
  );
};

export default MyComponent;
