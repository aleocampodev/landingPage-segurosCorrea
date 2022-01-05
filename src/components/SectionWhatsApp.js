import React from 'react';

import whatsApp from '../assets/images/whatsapp.png';
import '../assets/sass/main.scss';

const SectionWhatsApp = () => {
  return (
    <div className="section-whatsApp">
      <a href=" https://wa.me/573003423286?text=Me%20gustaria%20una%20asesoria%20">
        <img src={whatsApp} />
      </a>
    </div>
  );
};

export default SectionWhatsApp;
