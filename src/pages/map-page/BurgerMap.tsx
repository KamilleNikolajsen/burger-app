import React, {useEffect, useState} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getBurgerPlaces } from "../../services/getApiService";
import { Place } from "../../models/apiModels";
import SearchComponent from "./SearchComponent";
import './BurgerMap.css';

const center = {
  lat: 55.7355,
  lng: 9.1153
};

function BurgerPlacesMap() {
    const [burgerPlaces, setBurgerPlaces] = useState<Place[]>([]);
    const [filteredPlaces, setFilteredPlaces] = useState(burgerPlaces);

  useEffect(() => {
    getBurgerPlaces().then((response: Place[]) => {
      if (response) {
        setBurgerPlaces(response );
        console.log('Burger places:', response);
      } else {
        console.error('getReviews returned an undefined or null response');
      }
    });
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = burgerPlaces.filter(place =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  return (
      <LoadScript
          googleMapsApiKey="AIzaSyDmPFdAoP4v3mxdlPzoTrkld7osrvM9SlM"
      >
        <div className="map-search">
        <SearchComponent onSearch={handleSearch} />
      </div>
        <GoogleMap
            mapContainerClassName="map-container-style"
            center={center}
            zoom={8}
        >
          {filteredPlaces.map((burgerPlace: Place, index) => (
              <Marker key={index} position={{ lat: burgerPlace.lat, lng: burgerPlace.lng }} icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}  />
          ))}
        </GoogleMap>
      </LoadScript>
  )
}

export default React.memo(BurgerPlacesMap);