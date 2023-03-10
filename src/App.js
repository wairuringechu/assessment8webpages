import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Posts from './Components/Post';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </Router>
  );
}

export default App;
