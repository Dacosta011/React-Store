import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAi29_tOvTOeeIZCjt7GwXIJ9ahDwZ9S2k`;

  const req = async () => {
    console.log(API);
    try {
      const res = await axios(API);
      console.log(res);
    } catch (err) {
        console.log(err)
    }
  };

  //useEffect(() => {
  //req()
  //setMap(response.data.results[0].geometry.location);
  //}, []);
  return map;
};

export default useGoogleAddress;
