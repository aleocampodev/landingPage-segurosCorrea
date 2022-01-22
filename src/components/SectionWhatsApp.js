import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import AOS from 'aos';

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

  useEffect(() => {
    AOS.init();
  }, []);
  console.log(data, 'hola');

  const number = data.allMarkdownRemark.nodes[0].frontmatter.title;
  const message = data.allMarkdownRemark.nodes[0].frontmatter.description;

  return (
    <div className="section-whatsApp ">
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
