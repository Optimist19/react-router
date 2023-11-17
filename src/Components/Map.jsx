// import React from 'react'

// eslint-disable-next-line
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../Hooks/useGeoLocation";
import Button from "./Button";
import { useUrlPosition } from "../Hooks/useUrlPosition";

function Map() {
  const { cities } = useCities();

  // eslint-disable-next-line
  const [mapPosition, setMapPosition] = useState([40, 0]);

  
  // eslint-disable-next-line
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition
  } = useGeolocation();
  
  const [mapLat, mapLng] = useUrlPosition()

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  // console.log(cities, "cities");

  return (
    <div className={styles.mapContainer}>
    
      {
        !geolocationPosition && (
        <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
        )
      }
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

// eslint-disable-next-line
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    // eslint-disable-next-line
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  });
}
export default Map;

// function Map() {
// 	const [searchParams, setSearchParams] = useSearchParams()
// 	const navigate = useNavigate()

// 	const lat = searchParams.get("lat")
// 	const lng = searchParams.get("lng")
// 	// console.log(setSearchParams)

//   return (
// 	<div className={styles.mapContainer} onClick={()=>navigate("form")}>
// 		<h1>Map</h1>
// 		<h1>Position: {lat}, {lng}</h1>
// 		<button onClick={()=>setSearchParams({lat: 23, lng: 50})}>Change pos</button>
// 	</div>
//   )
// }
