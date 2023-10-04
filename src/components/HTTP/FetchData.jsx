import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>API Request Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <div className="card-container">
        {data && (
          data.map(item => (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
