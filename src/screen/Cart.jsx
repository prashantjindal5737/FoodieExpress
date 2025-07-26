import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const data = useCart();
  const dispatch = useDispatchCart();
  const total = data.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (!data.length) return <div className="container"><h1>Cart is empty</h1><Link to="/home">Order now</Link></div>;

  return (
    <div className="container">
      <table>
        <thead><tr><th>Sr.no</th><th>Name</th><th>Price</th><th>Qty</th><th>Total</th><th>Action</th></tr></thead>
        <tbody>
          {data.map((i, idx)=>(
            <tr key={idx}>
              <td data-label="Sr.no">{idx+1}</td>
              <td data-label="Name">{i.name}</td>
              <td data-label="Price">₹{i.price}</td>
              <td data-label="Qty">{i.quantity}</td>
              <td data-label="Total">₹{i.price*i.quantity}</td>
              <td data-label="Action"><Button onClick={()=>dispatch({type:"REMOVE", id:i.id})}>Remove</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="total-price">Total ₹{total}</h2>
      <Button onClick={()=>dispatch({type:"DROP"})} className="btn bg-success m-2">Clear Cart</Button>
      <Button className="btn bg-success m-2">Payment Options</Button>
    </div>
  );
};

export default Cart;
