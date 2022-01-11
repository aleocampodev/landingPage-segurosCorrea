import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import whatsApp from '../assets/images/whatsapp.png';
import '../assets/sass/main.scss';

const SectionWhatsApp = () => {
  const data = useStaticQuery(graphql`
    query SectionWhatsAppQuery {
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
  const number = data.allMarkdownRemark.nodes[30].frontmatter.title;
  const message = data.allMarkdownRemark.nodes[30].frontmatter.description;

  return (
    <div className="section-whatsApp">
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
