import React from 'react';

import logoSc from '../assets/img/logoSC.jpeg';

import config from '../../config';
import '../assets/sass/main.scss';

const Banner = ({ title, description, backgroundPic ,subTitle}) => {
  return (
    <section
      id="banner"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(25,38,101,0.9122023809523809) 0%, rgba(25,38,101,0.8449754901960784) 1%), url(${backgroundPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: `#192665`,
      }}
    >
      <div className="inner">
        <div className="logo">
          <img src={logoSc} alt="logo seguros correa" className="icon" />
        </div>
        <div className="header-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

export default Banner;
