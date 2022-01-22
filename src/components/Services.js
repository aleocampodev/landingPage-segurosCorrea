import React from 'react';

import Insurers from './Insurers';
import { Link, useStaticQuery, graphql } from 'gatsby';
import HeadServices from './HeadServices';

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

  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner" id="servicios">
        <HeadServices />
        <section
          className="features"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="features-product">
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
            <Link to="/Generic" className="button">
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
