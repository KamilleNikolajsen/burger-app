import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {Box, TextField} from "@mui/material";
import './Review.css';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import DisplayReviews from "./DisplayReviews";

function Review() {
    const [taste, setTaste] = useState("");
    const [value, setValue] = React.useState<number | null>(2);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Do something with taste, texture, and visualPresentation
        console.log({taste});
    };

    return (
        <div className="review">
            <header className="review-header">
                <h1>Review</h1>
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
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div className="review-rating">
                            <Typography>Texture</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div className="review-rating">
                            <Typography>Visual Presentation</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                    </div>
                    <div className="review-text">
                        <TextField
                            label="Review"
                            variant="outlined"
                            multiline
                            rows={10}
                            value={taste}
                            onChange={(e) => setTaste(e.target.value)}
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
        </div>
    );
}

export default Review;