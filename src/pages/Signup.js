import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('password', password);
    try{
      await dispatch(signup(fd)).unwrap();
      nav('/');
    }catch(err){ alert('Signup failed'); }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br/>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
