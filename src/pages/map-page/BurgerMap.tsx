import React, {useEffect, useState} from 'react';
import {GoogleMap, InfoWindowF, Marker, useJsApiLoader} from '@react-google-maps/api';
import { Place } from "../../models/apiModels";
import SearchComponent from "./SearchComponent";
import './BurgerMap.css';
import {getBurgerPlaces} from "../../services/ApiServiceLocations";
import {toast, ToastContainer} from "react-toastify";

const center = {
  lat: 55.7355,
  lng: 9.1153
};

function BurgerPlacesMap() {
    const [burgerPlaces, setBurgerPlaces] = useState<Place[]>([]);
    const [filteredPlaces, setFilteredPlaces] = useState(burgerPlaces);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

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
    if (!searchTerm) {
      toast.error("Search field must be filled out before searching.");
    } else {
      const filtered = burgerPlaces.filter(place =>
          place.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPlaces(filtered);
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDmPFdAoP4v3mxdlPzoTrkld7osrvM9SlM',
    libraries: ['geometry', 'drawing'],
  });

  return (
      <div>
        <div className="map-search">
          <SearchComponent onSearch={handleSearch} />
        </div>
        {isLoaded && <GoogleMap
            mapContainerClassName="map-container-style"
            center={center}
            zoom={8}
        >
          {filteredPlaces.map((burgerPlace: Place, index) => (
              <Marker onClick={() => setSelectedPlace(burgerPlace)} key={index} position={{ lat: burgerPlace.lat, lng: burgerPlace.lng }} icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}/>
          ))}
          {selectedPlace && (
              <InfoWindowF
                  position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
                  onCloseClick={() => setSelectedPlace(null)}
              >
                <div>
                  <h2>{selectedPlace.name}</h2>
                  <p>Address: {selectedPlace.address}</p>
                  <p>Opening Time Mon-Sun: {selectedPlace.openingTimes}</p>
                </div>
              </InfoWindowF>
          )}
        </GoogleMap>}
        <ToastContainer/>
      </div>
  )
}

export default React.memo(BurgerPlacesMap);