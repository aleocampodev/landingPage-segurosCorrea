import React from 'react';
import '../assets/sass/main.scss';
import maintance from '../assets/images/maintance.png';

const imageMaintenance = () => (
  <div className="center-image">
    <img src={maintance} alt="sitio en mantenimiento" />
  </div>
);

export default imageMaintenance;
