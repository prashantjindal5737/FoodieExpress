import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useCart } from './ContextReducer';
import { SearchContext } from './Search';
import './Navbar.css';

const Navbar1 = () => {
  const navigate = useNavigate();
  const cart = useCart();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const logout = () => { localStorage.removeItem('authToken'); navigate('/login'); };
  const goCart = () => navigate('/cart');

  return (
    <div className="navbarmain">
      <Link to="/" className="title1">FoodieExpress</Link>
      <input type="text" placeholder="Search food" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
      <div style={{ marginLeft: 'auto' }}>
        {localStorage.getItem('authToken') ? (
          <>
            <Link to="/addfood" className="btn">Add Food</Link>
            <button className="btn" onClick={goCart}>My Cart <Badge bg="danger">{cart.length}</Badge></button>
            <button className="btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/signup" className="btn">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar1;
