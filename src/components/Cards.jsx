import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatchCart, useCart } from './ContextReducer';

const Cards = ({ fooditems, quantity }) => {
  const dispatch = useDispatchCart();
  const cart = useCart();
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => { setSize(priceRef.current.value); }, []);

  const handleAdd = () => {
    dispatch({ type: "ADD", item: { id: fooditems._id, name: fooditems.name, price: size, quantity: qty } });
    alert("Added to cart");
  };

  const final = size * qty;
  // const img2="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  return (
    <div className="card" >
      <img src={fooditems.img} alt={fooditems.name} style={{
    display: "flex",
    width: "100%",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",

    alignItems: "center",
  }}
onError={(e) => {
    // e.target.onerror = null; // Prevent infinite loop
    e.target.src = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";
  }}
 />
      {console.log("Image URL:", fooditems.img, fooditems.name)}
      <h2>{fooditems.name}</h2>
      <select onChange={e=>setQty(e.target.value)}> {Array.from({length:10},(_,i)=><option key={i} value={i+1}>{i+1}</option>)}</select>
      <select ref={priceRef} onChange={e=>setSize(e.target.value)}>
        {Object.entries(quantity).map(([key,val])=>(
          <option key={key} value={val}>{key}-{val}</option>
        ))}
      </select>
      <p>Price: ₹{final}</p>
      <Button onClick={handleAdd} className="btn bg-success">Add to cart</Button>
    </div>
  );
};

export default Cards;
