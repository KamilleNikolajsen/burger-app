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