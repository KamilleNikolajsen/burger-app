import React, { useState, ChangeEvent, FormEvent } from 'react';
import './BurgerMap.css';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {SearchComponentProps} from "../../models/apiModels";

export default function SearchComponent({ onSearch }: SearchComponentProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                className="search-input"
                label="Seach"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <Button className="search-button" variant="contained" type="submit" style={{marginLeft: '10px'}}>Search</Button>
        </form>
    );
}