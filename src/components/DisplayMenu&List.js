import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AddToMenu from "./AddToMenu";
import "../index.css"

const DisplayMenuAndItem = ({ foodList }) => {

  
   

  return (
    
    <Accordion>
    
      {foodList.map((food, index) => {
        return (
          
          <Accordion.Item eventKey={index} key={index}>
            <AddToMenu food={food} />
            
          </Accordion.Item>
         
); })}

    </Accordion>
   
  );
  
};

export default DisplayMenuAndItem;