import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {Box, TextField} from "@mui/material";
import './Review.css';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import DisplayReviews from "./DisplayReviews";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PostReviewResponse} from "../../models/apiModels";
import {postReview} from "../../services/ApiServiceReview";

export default function Review() {
    const [text, setText] = useState("");
    const [tasteValue, setTasteValue] = React.useState<number | null>(2);
    const [textureValue, setTextureValue] = React.useState<number | null>(2);
    const [vPValue, setVPValue] = React.useState<number | null>(2);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!text || !tasteValue || !textureValue || !vPValue) {
            toast.error("All fields must be filled out before submitting.");
        }
        else {
            const review = {
                text: text,
                tasteRating: tasteValue,
                textureRating: textureValue,
                visualPresentationRating: vPValue
            };
            postReview(review)
                .then((response: PostReviewResponse) => {
                    if(response){
                    toast.success(`Review posted successfully: Text: ${response.text} -Taste: ${response.tasteRating}
                    -Texture: ${response.textureRating} -VP: ${response.visualPresentationRating}`, {autoClose: 3000});
                    setText("");
                    setTasteValue(2);
                    setTextureValue(2);
                    setVPValue(2);
                    } else {
                        toast.error(`An error occurred while posting the review: ${response}`, {autoClose: 3000});
                    }
                })
                .catch(error => {
                    toast.error(`An error occurred while posting the review: ${error}`, {autoClose: 3000});
                });
        }
    };

    return (
        <div className="review">
            <header className="review-header">
                <h1>Burger Reviews</h1>
            </header>
            <div className="review-header-text">
                On this page you can review burgers based on the taste, texture, and visual presentation. You can also
                see other people's reviews.
            </div>
            <div className="div-with-divider"/>
            <div className="review-content">
                <Box className="review-box" component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h3 className="reviews-title" style={{textAlign: 'center'}}>
                        Your Review
                    </h3>
                    <div className="review-ratings">
                        <div className="review-rating">
                            <Typography>Taste</Typography>
                            <Rating
                                name="simple-controlled"
                                value={tasteValue}
                                onChange={(event, newValue) => {
                                    setTasteValue(newValue);
                                }}
                            />
                        </div>
                        <div className="review-rating">
                            <Typography>Texture</Typography>
                            <Rating
                                name="simple-controlled"
                                value={textureValue}
                                onChange={(event, newValue) => {
                                    setTextureValue(newValue);
                                }}
                            />
                        </div>
                        <div className="review-rating">
                            <Typography>Visual Presentation</Typography>
                            <Rating
                                name="simple-controlled"
                                value={vPValue}
                                onChange={(event, newValue) => {
                                    setVPValue(newValue);
                                }}
                            />
                        </div>
                    </div>
                    <div className="review-text">
                        <TextField
                            label="Write your review here"
                            variant="outlined"
                            multiline
                            rows={10}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            style={{width: '100%'}}
                        />
                    </div>
                    <div className="review-button">
                        <Button variant="contained" type="submit">Submit Review</Button>
                    </div>
                </Box>
                <div className="review-gallery">
                    <h3 className="reviews-title" style={{textAlign: 'center'}}>
                        All reviews
                    </h3>
                    <div className="review-gallery-content-test">
                        <DisplayReviews/>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

//export default Review;