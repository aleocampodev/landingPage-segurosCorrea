import React from 'react';

import Layout from '../components/Layout';

import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import logoSc from '../assets/img/logoSC.jpeg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img src={logoSc} alt="logo seguros correa" className="icon" />
        </div>
        <div className="header-text">
          <h2>{config.heading}</h2>
          <p>Empresa de consultoría</p>
        </div>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="image">
            <img src={img1} alt="" className="image" />
          </div>
          <div className="content">
            <h2 className="major major-secondary">¿Quiénes somos?</h2>
            <p className="paragraph-secondary">
              Somos una empresa consultora de seguros de vida y generales, con
              una amplia experiencia en la industria, hemos trabajado con varias
              compañías como : Skandia, Sura, Seguros Bolivar, Colpatria, Met
              Life, entre otras. De cada una se ha tenido un aprendizaje para
              aportar y brindarle al cliente la mejor asesoria.
            </p>
            <p className="paragraph-secondary">
              Contactanos para brindarte el seguro más adecuado que complemente
              lo que tu necesitas tanto para ti, como para tus seres queridos.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <div className="image">
            <img src={img2} alt="" className="image" />
          </div>
          <div className="content">
            <h2 className="major major-secondary">Principios</h2>
            <ul>
              <li>
                Confidencialidad: Cada información que obtenemos es de orden
                privado{' '}
              </li>
              <li>
                Transparencia: Somos transparentes y queremos brindarle el mas
                sincero servicio.
              </li>
              <li>Eficacia: </li>
              <li>Espiritu de servicio: </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <div className="image">
            <img src={img3} alt="" className="image" />
          </div>
          <div className="content">
            <h2 className="content-opinion">
              Buscamos la solución a la medida, que te ayudará a cuidar a los
              que más quieres.
            </h2>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major major-secondary">Productos</h2>
          <p className="paragraph-secondary">Estos son nuestros productos</p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Ahorro e inversión</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Seguros de vida y generales</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Seguros educativos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Asistencia Integral para viajeros</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <div className="testimonial">
            <div className="card">
              <div className="layer"></div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="image">
                  <img src="img.jpg" />
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="image">
                  <img src="img.jpg" />
                </div>
                <div className="details">
                  <h2>Someone Famous Website Designer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
