import React from 'react';

import saving from '../assets/images/saving.jpeg';
import life from '../assets/images/life.jpeg';
import education from '../assets/images/education.jpeg';
import travelers from '../assets/images/travelers.jpeg';

import Insurers from './Insurers';
import { Link } from 'gatsby';

const Products = () => {
  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner">
        <h2 className="major major-secondary">Servicios</h2>
        <p className="paragraph-secondary">
          Algunos de los servicios que manejo.
        </p>
        <section className="features">
          <div className="features-product">
            <div className="maincontainer">
              <div className="back">
                <h2>Ahorro e inversión</h2>
                <p>
                  Ahorro con beneficio tributario, programa de inversión en
                  dolares.(Ahorro planeación e inversión)
                </p>
              </div>
              <div className="front">
                <div className="image">
                  <img src={saving} />
                  <h2>Ahorro e inversión</h2>
                </div>
              </div>
            </div>
            <div className="maincontainer">
              <div className="back">
                <h2>Seguros de vida y generales</h2>
                <p>
                  Los seguros de vida se maneja de manera individual y colectivo
                  Seguros generales incluyen responsabilidad civil, pólizas de
                  cumplimiento y pólizas de todo riesgo, entre otras.
                </p>
              </div>
              <div className="front">
                <div className="image">
                  <img src={life} />
                  <h2>Seguros de vida y generales</h2>
                </div>
              </div>
            </div>
            <div className="maincontainer">
              <div className="back">
                <h2>Seguros educativos</h2>
                <p>
                  Introduction to Web-Writing workshop focuses on building
                  creative and systemic digital content through online user
                  experiences that benefit people and robots. This workshop is
                  best-suited to creating content for digital platforms and
                  devices — websites, mobile, game consoles, and virtual reality
                  engines.
                </p>
              </div>
              <div className="front">
                <div className="image">
                  <img src={education} />
                  <h2>Seguros educativos</h2>
                </div>
              </div>
            </div>
            <div className="maincontainer">
              <div className="back">
                <h2>Asistencia integral para viajeros</h2>
                <p>
                  Introduction to Content Marketing workshop focuses on building
                  content frameworks that are designed for and directed at
                  communication engagement. This interdisciplinary workshop is
                  best-suited to learning visual and written communication
                  strategies.
                </p>
              </div>
              <div className="front">
                <div className="image">
                  <img src={travelers} />
                  <h2>Asistencia integral para viajeros</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ul className="actions">
          <li>
            <Link to="/Generic" className="button">
              Ver más
            </Link>
          </li>
        </ul>
      </div>
      <Insurers />
    </section>
  );
};

export default Products;
