import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchData from "./FetchNutrition";
import Review from "./Review";
import "../index.css"

const FoodItem = ({ food }) => {
  const [nutrition, setnutrition] = useState(false);
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

        <button class="button" onClick={() => setnutrition(!nutrition)}> Fetch Nutrition  </button>
        {nutrition && <FetchData query={food.name} />}


      </Accordion.Body>

    </div>
  );
};
export default FoodItem;