// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';

export default function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="nav">
        <Link to="/">Home</Link> |{' '}
        <Link to="/create">Create</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/signup">Signup</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}
