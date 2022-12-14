import React from "react";
import pizza from '../assets/pizza.mp4'
import "../index.css"

const Home = () => {
  return (
    <div className='mainVid'>
      
      <h1>Lab 3 Recipes</h1>
      
      <p className = "him"> Get back in the lab, its time to cook!</p>

      <video src={pizza} autoPlay loop muted />
</div>
); };
export default Home;

// comment
