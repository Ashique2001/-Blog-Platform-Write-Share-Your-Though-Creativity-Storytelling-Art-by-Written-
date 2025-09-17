import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE } from '../api/config';

export default function Profile(){
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get(`${API_BASE}/api/profile/${id}`).then(r=>{ setUser(r.data.user); setPosts(r.data.posts); }).catch(()=>{});
  },[id]);

  if(!user) return <div>Loading...</div>;
  return (
    <div className="container">
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <h3>Posts</h3>
      <ul>{posts.map(p=> <li key={p._id}>{p.title}</li>)}</ul>
    </div>
  );
}
