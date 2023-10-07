import React, { useState, useEffect } from 'react';

const LazyLoading = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error:', error));
    }, 2000); 
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lazy Loaded Component</h1>
      <ul>
        {data.slice(0,10).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LazyLoading;
