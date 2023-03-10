//HOME PAGE
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



function Home() {
  return (
    <div className="container">
    <h1> HELLO,WELCOME TO MY WEBSITE</h1>
    <button>Check out my  new posts</button>
      <Link to="/posts"> VIEW POSTS</Link>
    </div>
  );
}

export default Home;
