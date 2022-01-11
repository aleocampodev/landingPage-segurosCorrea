import React from 'react';

import Insurers from './Insurers';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allMarkdownRemark {
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
  console.log(data, 'services');
  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner">
        <h2 className="major major-secondary">
          {data.allMarkdownRemark.nodes[4].frontmatter.title}
        </h2>
        <p className="paragraph-secondary">
          Algunos de los servicios que manejo.
        </p>
        <section className="features">
          <div className="features-product">
            {data.allMarkdownRemark.nodes
              .filter((node, index) => index >= 23 && index <= 26)
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
