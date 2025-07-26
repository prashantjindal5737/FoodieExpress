import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


const AddFood = () => {
    const naviagte=useNavigate()
    const [data, setData] = useState({
        name: "",
        img: "",
        optionhalf: "",
        optionfull: "",
        category: "",
    });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // const categoryRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const FoodData = await fetch("http://localhost:5000/addFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        category: data.category,
        img: data.img,
        option: { full: data.optionfull, half: data.optionhalf },
      }),
    });
    const Json=await FoodData.json()
    console.log(Json);
    if (Json.success) {
      alert("Category created successfully");
      naviagte("/")
    }
    else{
      alert("Category creation failed");
    }
    // const Json=await resp.json()
    // console.log(Json);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add Food</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            placeholder="Enter your name"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">Image Url</label>
          <input
            type="text"
            id="img"
            name="img"
            value={data.img}
            placeholder="Enter your image url"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="option">Option</label>

          <input
            type="object"
            id="optionhalf"
            name="optionhalf"
            value={data.optionhalf}
            placeholder="price for half"
            required
            onChange={onChange}
          />
          <input
            type="object"
            id="optionfull"
            name="optionfull"
            value={data.optionfull}
            placeholder="price for full"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Select Category</label>

          <select
            name="category"
            id="category"
            value={data.category}
            onChange={onChange}
          >
            <option value="">Select Category</option>
            <option value="Main Course">Main Course</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Dessert">Dessert</option>
            <option value="Snack">Snack</option>
            <option value="South Indian">South Indian</option>
            <option value="North Indian">North Indian</option>
          </select>
        </div>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
