import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Review from "./Review";
import "../index.css"
const FoodItem = ({ food }) => {
  return (
    <div>

      <Accordion.Header>  {food.name}</Accordion.Header>

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


        <p><FetchNutrition query={food.name} /></p>
        <p><Review food={food} /></p>
        {food.review.map((item) => {

return <p className="displayReview">{item}</p>
})}

      </Accordion.Body>

    </div>
  );
};
export default FoodItem;