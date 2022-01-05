import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import skandia from '../assets/images/logos/logo skandia.png';
import allianz from '../assets/images/logos/allianzLogo.png';
import axa from '../assets/images/logos/Axa-logo.jpeg';
import bbva from '../assets/images/logos/bbvaLogo.jpeg';
import colpatria from '../assets/images/logos/colpatriaLogo.png';
import global from '../assets/images/logos/globalLogo.jpeg';
import liberty from '../assets/images/logos/libertysegurosLogo.png';
import sbs from '../assets/images/logos/sbslogo.png';
import segurosBolivar from '../assets/images/logos/segurosbolivar.jpeg';
import segurosDelEstado from '../assets/images/logos/segurosdelestadologo.gif';
import mapfre from '../assets/images/logos/mapfreLogo.jpeg';
import assistCard from '../assets/images/logos/assistCardLogo.png';
import previsora from '../assets/images/logos/previsoraLogo.png';
import sura from '../assets/images/logos/sura.png';
import segurosMundial from '../assets/images/logos/segurosmundialLogo.jpeg';

import '../assets/sass/main.scss';

const Insurers = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div className="inner">
      <div className="slider">
        <h2 className=" major-secondary">Aseguradoras</h2>
        <Slider {...settings}>
          <div className="logoInsurer">
            <img className="logoImage" src={skandia} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={allianz} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={axa} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={bbva} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={colpatria} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={global} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={liberty} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={sbs} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={segurosBolivar} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={segurosDelEstado} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={assistCard} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={previsora} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={mapfre} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={sura} alt="" />
          </div>
          <div className="logoInsurer">
            <img className="logoImage" src={segurosMundial} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Insurers;
