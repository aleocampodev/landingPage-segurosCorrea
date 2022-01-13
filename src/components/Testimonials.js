import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../assets/sass/main.scss';

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "testimonials" } } }
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

  console.log(data, 'estimonials');

  return (
    <section id="three" className="wrapper spotlight spotlight1 style3">
      <div className="inner">
        <h2 className="major major-secondary">
          {data.allMarkdownRemark.nodes[0].frontmatter.title}
        </h2>
        <div className="testimonials">
          {data.allMarkdownRemark.nodes
            .filter((node, index) => index >= 1)
            .map((node, index) => {
              return (
                <div className="card" key={index}>
                  <div className="layer"></div>
                  <div className="content">
                    <p>{node.frontmatter.description}</p>
                    <div className="image1">
                      <img
                        src={node.frontmatter.image.publicURL}
                        alt={node.frontmatter.alt}
                      />
                    </div>
                    <div className="details">
                      <h2>{node.frontmatter.title}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
