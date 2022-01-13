import React from 'react';

import Insurers from './Insurers';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
  console.log(data, 'services');
  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner" id="servicios">
        <h2 className="major major-secondary">
          {data.allMarkdownRemark.nodes[0].frontmatter.title}
        </h2>
        <p className="paragraph-secondary">
          {data.allMarkdownRemark.nodes[0].frontmatter.description}
        </p>
        <section className="features">
          <div className="features-product">
            {data.allMarkdownRemark.nodes
              .filter((node, index) => index >= 1)
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
