import React, { useState, useEffect } from 'react';
import './Post.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/docs/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  const handlePostIdChange = event => {
    setPostId(event.target.value);
  };

  const handleFetchPost = event => {
    event.preventDefault();
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setSinglePost(data))
      .catch(error => console.log(error));
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
