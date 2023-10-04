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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Post Successful:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ marginTop: '50px'}}>
      <h1>Async Await Example</h1>
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
