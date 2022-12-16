import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Review from "./Review";
import "../index.css"
const AddToMenu = ({ food }) => {
  return (
    <div>

      <Accordion.Header> <div className="centerThis"> {food.name}</div></Accordion.Header>
      <div>
        <Accordion.Body>
          <p>{food.category}</p>
          <p>{food.description}</p>
          <p>{food.price}</p>
          {food.recipe.map((item) => {

            return <p>{item}</p>
          })}
          {food.ingredients.map((item) => {

            return <p> {item.ingredientName} {item.quantity} {item.measurement} </p>
          })}



          <p><Review food={food} /></p>
          {food.review.map((item) => {

            return <p className="displayReview">{item}</p>
          })}

        </Accordion.Body>
      </div>
    </div>
  );
};
export default AddToMenu;