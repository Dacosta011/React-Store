import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: 19.4268,
    lng: -99.17,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAi29_tOvTOeeIZCjt7GwXIJ9ahDwZ9S2k">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
