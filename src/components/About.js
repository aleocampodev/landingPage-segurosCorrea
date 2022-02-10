import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease',
      once: true,
      animatedClassName: 'aos-animate', // class applied on animation
    });
    AOS.refresh();
  }, []);

  const content = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.title === '¡Lo que hago!'
  ).html;
  const about = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.title === '¡Lo que hago!'
  ).frontmatter.image.publicURL;

  return (
    <>
      <section id="one" className="wrapper spotlight style1">
        <div className="inner" id="loquehago">
          <div className="image" data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="500">
            <img
              src={about}
              alt={data.allMarkdownRemark.nodes.find(
                element => element.frontmatter.alt === 'Gerente de planeacion'
              )}
              className="image2"
              
            />
          </div>
          <div
            className="content"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
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
