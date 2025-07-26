import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [data, setData] = useState({ name:'', email:'', password:'', address:'' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/createuser", { method:'POST', headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
    const json = await resp.json();
    if (json.success) {
      navigate('/login');
    } else {
      alert(json.error || 'Signup failed');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign:'center', color:'#ff4e50' }}>Signup</h2>
        <div className="form-group"><label>Name</label><input type="text" name="name" value={data.name} onChange={e=>setData({...data,name:e.target.value})} required /></div>
        <div className="form-group"><label>Email</label><input type="email" name="email" value={data.email} onChange={e=>setData({...data,email:e.target.value})} required /></div>
        <div className="form-group"><label>Address</label><input type="text" name="address" value={data.address} onChange={e=>setData({...data,address:e.target.value})} required /></div>
        <div className="form-group"><label>Password</label><input type="password" name="password" value={data.password} onChange={e=>setData({...data,password:e.target.value})} required /></div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
