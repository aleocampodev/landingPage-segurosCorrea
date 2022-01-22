import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

const HeadServices = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "headservices" } } }
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
    <>
      <h2 className="major major-secondary">
        {data.allMarkdownRemark.nodes[0].frontmatter.title}
      </h2>
      <p className="paragraph-secondary">
        {data.allMarkdownRemark.nodes[0].frontmatter.description}
      </p>
    </>
  );
};

export default HeadServices;
