import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Review from "./Review";
import "../index.css"
const AddToItem = ({ food }) => {
  return (
    <div>
      {/* what is happening */}

      <Accordion.Header> <div className ="centerThis"> {food.name}</div></Accordion.Header>
      <div>
      <Accordion.Body>
      
        {food.ingredients.map((item)=>{
          
         return <p> {item.ingredientName} {item.quantity} {item.measurement} </p>
        })}
         

        
        
       
      </Accordion.Body>
      </div>
</div>
); };
export default AddToItem;