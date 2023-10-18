import { useState, useEffect } from 'react';

import Post from './Post';
import classes from './PostList.module.css';
import RootLayout from '../routes/RootLayout';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  console.log('postlist')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('postData'))
    console.log(data)
    setPosts(data)

  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  console.log(posts)
  return (
    <>
    <RootLayout/>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts?.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;