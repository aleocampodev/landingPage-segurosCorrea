import React from 'react';

import Insurers from './Insurers';
import { Link } from 'gatsby';

const Products = () => {
  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner">
        <h2 className="major major-secondary">Productos</h2>
        <p className="paragraph-secondary">
          Algunos de los productos que manejo.
        </p>
        <section className="features">
          <div className="features-product">
            <div className="maincontainer">
              <div className="back">
                <h2>Ahorro e inversion</h2>
                <p>
                  Introduction to Copywriting’ workshop focuses on the theory
                  and processes of professional copywriting as applied to
                  persuasion, reasoning, and rhetoric. This workshop is
                  best-suited to learning how to write and think about
                  consumer-driven functions.
                </p>
              </div>
              <div className="front">
                <div className="image">
                  <img src="https://i.postimg.cc/nhG8H3X6/copywriting.jpg" />
                  <h2>Ahorro e inversión</h2>
                </div>
              </div>
            </div>
            <div className="maincontainer">
              <div className="back">
                <h2>Seguros de vida y generales</h2>
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
                  <img src="https://i.postimg.cc/ydrv1ZXq/contentmarketing.jpg" />
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
                  <img src="https://i.postimg.cc/ZqbG0630/webwriting.jpg" />
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
                  <img src="https://i.postimg.cc/ydrv1ZXq/contentmarketing.jpg" />
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
