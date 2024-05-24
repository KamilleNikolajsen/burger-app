import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useEffect, useState} from "react";
import {Box, ImageListItemBar} from "@mui/material";
import {Image} from "../../models/apiModels";
import {getImages} from "../../services/ApiServiceGallery";

export default function GalleryList() {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        getImages().then((response: Image[]) => {
            if (response) {
                setImages(response);
            } else {
                console.error('getReviews returned an undefined or null response');
            }
        });
    }, []);

    return (
        <div className="image-list">
        <Box sx={{ height: 600, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={2} gap={8}>
                {images.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar className="image-title" position="below" title={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        </div>
    );
}

