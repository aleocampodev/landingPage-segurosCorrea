import React from 'react';

import Slider from 'react-slick';
import Layout from '../components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import profile1 from '../assets/images/profile1.jpeg';
import logoSc from '../assets/img/logoSC.jpeg';
import backgroundPic from '../assets/images/bg.jpeg';
import whatsApp from '../assets/images/whatsapp.png';
import '../assets/sass/main.scss';

import config from '../../config';
const IndexPage = () => {
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
    <div>
      <Layout>
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
                  Somos una empresa consultora de seguros de vida y generales,
                  con una amplia experiencia en la industria, hemos trabajado
                  con varias compañías como : Skandia, Sura, Seguros Bolivar,
                  Colpatria, Met Life, entre otras. De cada una se ha tenido un
                  aprendizaje para aportar y brindarle al cliente la mejor
                  asesoria.
                </p>
                <p className="paragraph-secondary">
                  Contactanos para brindarte el seguro más adecuado que
                  complemente lo que tu necesitas tanto para ti, como para tus
                  seres queridos.
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
                    Transparencia: Somos transparentes y queremos brindarle el
                    mas sincero servicio a nuestros clientes.
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
                  Busco la solución a la medida, que te ayudará a cuidar a los
                  que más quieres.
                </h2>
              </div>
            </div>
          </section>

          <section id="four" className="wrapper alt style1">
            <div className="inner">
              <h2 className="major major-secondary">Productos</h2>
              <p className="paragraph-secondary">
                Algunos de los productos que manejo.
              </p>
              <section className="features">
                <div className="maincontainer">
                  <div className="back">
                    <h2>Ahorro e inversion</h2>
                    <p>
                      Introduction to Copywriting’ workshop focuses on the
                      theory and processes of professional copywriting as
                      applied to persuasion, reasoning, and rhetoric. This
                      workshop is best-suited to learning how to write and think
                      about consumer-driven functions.
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
                      Introduction to Content Marketing workshop focuses on
                      building content frameworks that are designed for and
                      directed at communication engagement. This
                      interdisciplinary workshop is best-suited to learning
                      visual and written communication strategies.
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
                      experiences that benefit people and robots. This workshop
                      is best-suited to creating content for digital platforms
                      and devices — websites, mobile, game consoles, and virtual
                      reality engines.
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
                      Introduction to Content Marketing workshop focuses on
                      building content frameworks that are designed for and
                      directed at communication engagement. This
                      interdisciplinary workshop is best-suited to learning
                      visual and written communication strategies.
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img src="https://i.postimg.cc/ydrv1ZXq/contentmarketing.jpg" />
                      <h2>Asistencia integral para viajeros</h2>
                    </div>
                  </div>
                </div>
              </section>
              <ul className="actions">
                <li>
                  <a href="/#" className="button">
                    Ver más
                  </a>
                </li>
              </ul>
            </div>

            <div className="slider">
              <h2>Auto Play</h2>
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </section>

          <section id="three" className="wrapper spotlight spotlight1 style3">
            <div className="inner">
              <h2 className="major major-secondary">Testimonios</h2>
              <div className="testimonials">
                <div className="card">
                  <div className="layer"></div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
        </section>
      </Layout>
      <section>
        <div className="section-whatsApp">
          <a href=" https://wa.me/573132063993?text=Me%20gustaria%20una%20asesoria%20">
            <img src={whatsApp} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
