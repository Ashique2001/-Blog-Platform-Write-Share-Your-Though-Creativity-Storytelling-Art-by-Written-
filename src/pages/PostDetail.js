import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE } from '../api/config';

export default function PostDetail(){
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(()=>{
    axios.get(`${API_BASE}/api/posts/${id}`).then(r=>setPost(r.data)).catch(()=>{});
  },[id]);

  if(!post) return <div>Loading...</div>;
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>By {post.author?.name}</p>
      <div dangerouslySetInnerHTML={{__html: post.content}} />
    </div>
  );
}
