import * as React from "react";

export type Review = {
    restaurant: string;
    taste: number;
    texture: number;
    visualPresentation: number;
    reviewText: string;
}

export type Image = {
    img: string;
    title: string;
}
 export type Place = {
    id: number;
    name: string;
    address: string;
    lat: number;
    lng: number;
}

export type BurgerMapProps = {
    burgerPlaces: Place[];
}

export type PostReviewResponse = {
    id: string;
    text: string;
    tasteRating: number;
    textureRating: number;
    visualPresentationRating: number;
}

export type PostImageResponse = {
    id: string;
    img: string;
    title: string;
}

export type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export type SearchComponentProps = {
    onSearch: (searchTerm: string) => void;
}