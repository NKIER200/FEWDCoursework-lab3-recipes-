import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../index.css"
const Review = ({ food }) => {
    const [reviewText, setReviewText] = useState(0)
    const handleClick = () => {
        if (reviewText !== 0) {
            food.review.push(reviewText)
            console.log(food.review)
            setReviewText(0);
        }
    }
    return (
        <div>Review


            <Accordion.Body>
                <span class = "input-wrapper">
                <input class= "inputReview" type="number" min={0} max={5} value={reviewText} onChange={(e) => setReviewText(e.target.value)}>
                </input>
                </span>
                <button class="button" onClick={() => handleClick()} disabled={reviewText === 0}> Add Review </button>

            </Accordion.Body>
            
        </div>

    );
    
};
export default Review;