import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({ email:'', password:'' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/login", { method:'POST', headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
    const json = await resp.json();
    if (json.success) {
      localStorage.setItem('authToken', json.authToken);
      navigate('/');
    } else {
      alert(json.error || 'Login failed');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign:'center', color:'#ff4e50' }}>Login</h2>
        <div className="form-group"><label>Email</label><input type="email" name="email" value={data.email} onChange={e=>setData({...data,email:e.target.value})} required /></div>
        <div className="form-group"><label>Password</label><input type="password" name="password" value={data.password} onChange={e=>setData({...data,password:e.target.value})} required /></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
