import React, { useEffect } from 'react';

import Insurers from './Insurers';
import { Link, useStaticQuery, graphql } from 'gatsby';
import HeadServices from './HeadServices';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "services" } } }
      ) {
        nodes {
          frontmatter {
            title
            date
            description
            image {
              publicURL
              base
            }
            alt
          }
          excerpt
          html
        }
      }
    }
  `);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease',
      once:true,
      animatedClassName: 'aos-animate', // class applied on animation
    });
    Aos.refresh();
  }, []);

  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner" id="servicios">
        <HeadServices />
        <section className="features">
          <div className="features-product" data-aos="fade-up">
            {data.allMarkdownRemark.nodes
              .sort((a, b) => a.identifier - b.identifier)
              .map((node, index) => {
                const text = node.html;
                return (
                  <div className="maincontainer" key={index}>
                    <div className="back">
                      <h2>{node.frontmatter.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: text }}></div>
                    </div>
                    <div className="front">
                      <div className="image">
                        <img
                          src={node.frontmatter.image.publicURL}
                          alt={node.frontmatter.alt}
                        />
                        <h2>{node.frontmatter.title}</h2>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        <ul className="actions">
          <li>
            <Link to="/Servicios" className="button">
              Ver más
            </Link>
          </li>
        </ul>
        <Insurers />
      </div>
    </section>
  );
};

export default Services;
