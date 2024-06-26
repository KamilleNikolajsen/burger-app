import {useState} from "react";
import * as React from "react";
import {Box, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import './Gallery.css';
import {toast, ToastContainer} from "react-toastify";
import {PostImageResponse} from "../../models/apiModels";
import {postImage} from "../../services/ApiServiceGallery";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function GetImage(){
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [isFileSelected, setIsFileSelected] = useState(false);

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
            setIsFileSelected(true);
        } else {
            setIsFileSelected(false);
        }
    };

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!image || !title) {
        toast.error("Both fields must be filled out before submitting.");
    }
    else {
        const imageData = {
            img: image,
            title: title
        };
        postImage(imageData)
            .then((response: PostImageResponse) => {
                if(response){
                toast.success(`Image posted successfully: Image Title: ${response.title}`);
                setImage("");
                setTitle("");
                setIsFileSelected(false);
                } else {
                    toast.error(`An error occurred while posting the image: ${response}`);
                }
            })
            .catch(error => {
                toast.error(`An error occurred while posting the image: ${error}`);
            });
    }
};

    return (
        <div className="get-image">
            <header className="get-image-header">
                <h1>Burger Gallery</h1>
            </header>
            <div className="review-header-text">
                On this page you can upload pictures of burgers and see burgers other people has uploaded.
            </div>
            <div className="div-with-divider"/>
            <div className="get-image-content">
                <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div className="get-image-upload">
    {/*                        <Input
                                className="get-image-input"
                                type="File"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />*/}
                            <TextField
                                className="text-field-image-upload"
                                type="file"
                                onChange={handleUpload}
                            />
                        {isFileSelected && <CheckCircleIcon className="check-icon"/>}
                        <div className="get-image-field">
                            <TextField
                                className="text-field"
                                label="Title"
                                variant="outlined"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="get-image-field">
                            <Button variant="contained" type="submit">
                                Submit Image
                            </Button>
                        </div>
                    </div>
                </Box>
            </div>
            <ToastContainer/>
        </div>
    );
}