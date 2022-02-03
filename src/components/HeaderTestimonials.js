import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../assets/sass/main.scss';

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "headerTestimonials" } } }
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

  return (
    <section id="three" className="wrapper spotlight spotlight1 style3 ">
      <div className="inner testimonialsCard" id="testimonios">
        <h2 className="major major-secondary testimonialsTitle">
          {data.allMarkdownRemark.nodes[0].frontmatter.title}
        </h2>
      </div>
    </section>
  );
};

export default Testimonials;
