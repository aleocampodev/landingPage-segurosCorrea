import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AOS from 'aos';

import '../assets/sass/main.scss';

const Principles = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "principles" } } }
      ) {
        nodes {
          frontmatter {
            title
            date
            subtitle
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

  const principles = data.allMarkdownRemark.nodes[0].html;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="two" className="wrapper alt spotlight style2">
      <div className="inner" id="principios">
        <div className="image" id="image">
          <img
            src={data.allMarkdownRemark.nodes[0].frontmatter.image.publicURL}
            alt={data.allMarkdownRemark.nodes[0].frontmatter.alt}
            className="image"
          />
        </div>
        <div className="content">
          <h2 className="major major-secondary">
            {data.allMarkdownRemark.nodes[0].frontmatter.title}
          </h2>
          <div
            className="listGreen"
            dangerouslySetInnerHTML={{ __html: principles }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
