import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AddToItem from "./AddToItem";
import "../index.css"

const DisplayItemz = ({ foodList }) => {

  
   

  return (
    
    <Accordion>
    
      {foodList.map((food, index) => {
        return (
          
          <Accordion.Item eventKey={index} key={index}>
            <AddToItem food={food} />
            
          </Accordion.Item>
         
); })}

    </Accordion>
   
  );
  
};

export default DisplayItemz;