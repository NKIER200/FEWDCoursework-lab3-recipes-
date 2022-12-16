import React from "react";
import "../index.css"
import Alan from '../assets/Video.mp4'

const AboutUs = () => {
  return (
    <div className='mainVid'>
      <h1>About Lab 3</h1>
      
      <p className = "him"> A leader in the industry of recipes</p>
      <p className = "him"> Created by Nathan Kier</p>
      <p className = "him" > Below, a word from our founder, Alan</p>
      <video className= "mainVid2" src={Alan} controls muted />
</div>
); };
export default AboutUs;