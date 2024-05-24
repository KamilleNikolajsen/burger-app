import React, { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import {Review} from "../../models/apiModels";
import {getReviews} from "../../services/ApiServiceReview";

export default function DisplayReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        getReviews().then((response: Review[]) => {
            if (response) {
                setReviews(response);
            } else {
                console.error('getReviews returned an undefined or null response');
            }
        });
    }, []);

    return (
        <div className="review-gallery-content">
            {reviews && reviews.map((review: Review) => (
                <div className="review-gallery-content">
                    <div className="reviewer-name">
                        {review.restaurant}
                    </div>
                    <div className="review-ratings">
                        <div className="review-rating">
                            <Typography>Taste</Typography>
                            <Rating name="read-only" value={review.taste} readOnly />
                        </div>
                        <div className="review-rating">
                            <Typography>Texture</Typography>
                            <Rating name="read-only" value={review.texture} readOnly />
                        </div>
                        <div className="review-rating">
                            <Typography>Visual Presentation</Typography>
                            <Rating name="read-only" value={review.visualPresentation} readOnly />
                        </div>
                    </div>
                    <div className="reviews-text">
                        {review.reviewText}
                    </div>
                </div>
            ))}
        </div>
    );
}