import React, { useState, useEffect } from 'react';

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>About</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Learn more about us and what we do!</p>
          <h3>Sample Titles:</h3>
          <ul>
            {data.slice(0,5).map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;
