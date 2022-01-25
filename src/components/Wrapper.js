import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AOS from 'aos';
import Services from './Services';
import Testimonials from '../components/Testimonials';
import Principles from '../components/Principles';
import About from '../components/About';

const Wrapper = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "wrapper" } } }
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

  const img = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.alt === 'Brindando un buen servicio'
  ).frontmatter.image.publicURL;
  const textphrase = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.alt === 'Brindando un buen servicio'
  );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="wrapper">
        <About />
        <Principles />

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <div className="image">
              <img src={img} alt={textphrase} className="image2" />
            </div>
            <div className="content">
              <h2 className="content-opinion">
                {
                  data.allMarkdownRemark.nodes.find(
                    element =>
                      element.frontmatter.alt === 'Brindando un buen servicio'
                  ).frontmatter.title
                }
              </h2>
            </div>
          </div>
        </section>

        <Services />
        <Testimonials />
      </section>
    </div>
  );
};

export default Wrapper;
