import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Testimonials from './Testimonials';
import Products from './Products';

import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';

const Wrapper = () => {
  return (
    <StaticQuery
      query={graphql`
        query WrapperQuery {
          allMarkdownRemark {
            nodes {
              frontmatter {
                title
                date
                description
                image {
                  id
                }
                alt
              }
              excerpt
              html
            }
          }
        }
      `}
      render={data => {
        const content = data.allMarkdownRemark.nodes;
        console.log(data, 'bu');

        return (
          <div>
            <section id="wrapper">
              <section id="one" className="wrapper spotlight style1">
                <div className="inner">
                  <div className="image">
                    <img src={img1} alt="" className="image" />
                  </div>
                  <div className="content">
                    <h2 className="major major-secondary">
                      {data.allMarkdownRemark.nodes[1].frontmatter.title}
                    </h2>
                    <p className="paragraph-secondary">
                      {data.allMarkdownRemark.nodes[1].htmlii}
                    </p>
                    <p className="paragraph-secondary">
                      Contactanos para brindarte el seguro más adecuado que
                      complemente lo que tu necesitas tanto para ti, como para
                      tus seres queridos.
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
                        Confidencialidad: Cada información que obtenemos es de
                        orden privado.
                      </li>
                      <li>
                        Transparencia: Somos transparentes y queremos brindarle
                        el mas sincero servicio a nuestros clientes.
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
                      Busco la solución a la medida, que te ayudará a cuidar a
                      los que más quieres.
                    </h2>
                  </div>
                </div>
              </section>

              <Products />

              <Testimonials />
            </section>
          </div>
        );
      }}
    />
  );
};

export default Wrapper;
