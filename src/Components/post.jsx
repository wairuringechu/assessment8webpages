//POST PAGE
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';


function Posts() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [singlePost, setSinglePost] = useState(null);
// useEffect hook to fetch the list of posts from the provided URL. 
//  axios library to make HTTP GET request to the specified URL.
  useEffect(() => {
    axios.get('https://dummyjson.com/docs/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
//handlePostIdChange function is used to update the postId state variable whenever the user enters a new post ID in the input field.
//handleFetchPost function is used to fetch the details of a single post based on the ID entered by the user. 
  const handlePostIdChange = event => {
    setPostId(event.target.value);
  };

  const handleFetchPost = event => {
    event.preventDefault();
    axios.get('https://dummyjson.com/posts')(`${postId}`)
      .then(response => {
        setSinglePost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="post-container">

      <h1>Posts</h1>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <h2>Fetch Single Post by ID</h2>
      <form onSubmit={handleFetchPost}>
        <label>
          Post ID:
          <input type="number" value={postId} onChange={handlePostIdChange} />
        </label>
        <button type="submit">Fetch Post</button>
      </form>
      {singlePost && (
        <div>
          <h3>{singlePost.title}</h3>
          <p>{singlePost.body}</p>
        </div>
      )}
    </div>
  );
}

export default Posts;
