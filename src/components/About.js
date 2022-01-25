import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "about" } } }
      ) {
        nodes {
          frontmatter {
            title
            subtitle
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

  const content = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.title === '¡Lo que hago!'
  ).html;
  const about = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.title === '¡Lo que hago!'
  ).frontmatter.image.publicURL;

  return (
    <>
      <section id="one" className="wrapper spotlight style1">
        <div className="inner" id="#loquehago">
          <div className="image">
            <img
              src={about}
              alt={data.allMarkdownRemark.nodes.find(
                element => element.frontmatter.alt === 'Gerente de planeacion'
              )}
              className="image2"
            />
          </div>
          <div className="content">
            <h2 className="major major-secondary aboutTitle">
              {
                data.allMarkdownRemark.nodes.find(
                  element => element.frontmatter.title === '¡Lo que hago!'
                ).frontmatter.title
              }
            </h2>
            <div
              className="paragraph-secondary "
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
