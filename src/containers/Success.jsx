import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import Maps from '../components/Maps';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Success;
