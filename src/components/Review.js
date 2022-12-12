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
                <input type="number" min={0} max={5} value={reviewText} onChange={(e) => setReviewText(e.target.value)}>
                </input>
                <button onClick={() => handleClick()} disabled={reviewText === 0}> Add Review </button>

            </Accordion.Body>
            
        </div>

    );
    console.log(food.review)
};
export default Review;