import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import "../index.css"
import Review from "./Review";

const DisplayFoodItems = (params) => {

  const foodList = params.foodList


  return (

    <Accordion>

      {foodList.map((food, index) => {
        return (

          <Accordion.Item eventKey={index} key={index}>
            <FoodItem food={food} />
            <Accordion.Body>

              <p><Review food={food} /></p>
              {food.review.map((item) => {

                return <p className="displayReview">{item}</p>
              })}
              <button class="button" onClick={() => params.setDisplayMenu(oldArray => [...oldArray, food])} disabled={params.menu.includes(food)}> Add to Menu </button>
              <button class="button" onClick={() => params.setDisplayItem(oldArray => [...oldArray, food])} disabled={params.item.includes(food)}> Add Item </button>
            </Accordion.Body>
          </Accordion.Item>

        );
      })}

    </Accordion>

  );

};

export default DisplayFoodItems;