import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

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

  console.log(data, 'principles');
  const principles = data.allMarkdownRemark.nodes[0].html;

  return (
    <section id="two" className="wrapper alt spotlight style2">
      <div className="inner" id="principios">
        <div className="image" id="image">
          <img
            src={data.allMarkdownRemark.nodes[0].frontmatter.image.publicURL}
            alt={data.allMarkdownRemark.nodes[0].frontmatter.alt}
            className="image"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease"
          />
        </div>
        <div className="content">
          <h2
            className="major major-secondary"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {data.allMarkdownRemark.nodes[0].frontmatter.title}
          </h2>
          <div
            className="listGreen"
            dangerouslySetInnerHTML={{ __html: principles }}
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
