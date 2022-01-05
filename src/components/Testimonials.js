import React from 'react';

import profile1 from '../assets/images/profile1.jpeg';
import '../assets/sass/main.scss';

const Testimonials = () => {
  return (
    <section id="three" className="wrapper spotlight spotlight1 style3">
      <div className="inner">
        <h2 className="major major-secondary">Testimonios</h2>
        <div className="testimonials">
          <div className="card">
            <div className="layer"></div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="image1">
                <img src={profile1} />
              </div>
              <div className="details">
                <h2>Someone Famous Website Designer</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="layer"></div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="image1">
                <img src={profile1} />
              </div>
              <div className="details">
                <h2>Someone Famous Website Designer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
