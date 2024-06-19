import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Millets Website..!!</h1>
      <Link to="/login">Login</Link>
      <Link to="/feedback">Feedback</Link>
    </div>
  );
};
export default Home;
