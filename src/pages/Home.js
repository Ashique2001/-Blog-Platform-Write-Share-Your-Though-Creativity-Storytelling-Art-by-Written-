import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../slices/postsSlice';
import { Link } from 'react-router-dom';

export default function Home(){
  const dispatch = useDispatch();
  const posts = useSelector(s => s.posts.list);

  useEffect(()=>{ dispatch(fetchPosts()); }, [dispatch]);

  return (
    <div className="container">
      <h1>Feed</h1>
      {posts.length===0 && <p>No posts yet.</p>}
      <ul>
        {posts.map(p=>(
          <li key={p._id}>
            <Link to={`/post/${p._id}`}>{p.title}</Link> by {p.author?.name || 'Unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
}
