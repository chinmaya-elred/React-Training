import React, { useState } from 'react';

function App() {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: 1 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => console.log('Post Successful:', data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{ marginTop: '50px'}}>
      <h1>Post Request Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={postData.title} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea 
            name="body" 
            value={postData.body} 
            onChange={handleInputChange} 
          />
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default App;
