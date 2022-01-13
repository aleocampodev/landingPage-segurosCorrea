import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

const MainServices = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "mainServices" } } }
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
  console.log(data, 'main services');
  return (
    <div className="inner">
      <h2 className="major-secondary">
        {data.allMarkdownRemark.nodes[0].frontmatter.title}
      </h2>
      <p className="paragraph-secondary">
        {data.allMarkdownRemark.nodes[0].frontmatter.description}
      </p>
    </div>
  );
};

export default MainServices;
