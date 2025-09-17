import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE } from '../api/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(){
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [tags,setTags]=useState('');
  const token = useSelector(s=>s.auth.token);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', title);
    fd.append('content', content);
    fd.append('tags', tags);
    try{
      await axios.post(`${API_BASE}/api/posts`, fd, { headers: { Authorization: `Bearer ${token}` }});
      nav('/');
    }catch(err){ alert('Create failed'); }
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
      <form onSubmit={submit}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} /><br/>
        <textarea placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} /><br/>
        <input placeholder="tags,comma,separated" value={tags} onChange={e=>setTags(e.target.value)} /><br/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
