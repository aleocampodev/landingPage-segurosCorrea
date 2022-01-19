import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import whatsApp from '../assets/folderImages/images/whatsapp.png';
import '../assets/sass/main.scss';

const SectionWhatsApp = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "sectionWhatsApp" } } }
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
  console.log(data, 'hola');
  const number = data.allMarkdownRemark.nodes[0].frontmatter.title;
  const message = data.allMarkdownRemark.nodes[0].frontmatter.description;

  return (
    <div
      className="section-whatsApp"
      data-sal="flip-left"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <a
        href={`https://wa.me/${number}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsApp} alt="Logo whatsApp" />
      </a>
    </div>
  );
};

export default SectionWhatsApp;
