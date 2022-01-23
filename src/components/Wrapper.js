import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AOS from 'aos';
import Services from './Services';
import Testimonials from '../components/Testimonials';
import Principles from '../components/Principles';

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

  const content = data.allMarkdownRemark.nodes[1].html;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner" id="#loquehago">
            <div className="image">
              <img
                src={
                  data.allMarkdownRemark.nodes[1].frontmatter.image.publicURL
                }
                alt={data.allMarkdownRemark.nodes[1].frontmatter.alt}
                className="image2"
              />
            </div>
            <div className="content">
              <h2 className="major major-secondary aboutTitle">
                {data.allMarkdownRemark.nodes[1].frontmatter.title}
              </h2>
              <div
                className="paragraph-secondary "
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </section>
        <Principles />

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <div className="image">
              <img
                src={
                  data.allMarkdownRemark.nodes[0].frontmatter.image.publicURL
                }
                alt={data.allMarkdownRemark.nodes[0].frontmatter.alt}
                className="image2"
              />
            </div>
            <div className="content">
              <h2 className="content-opinion">
                {data.allMarkdownRemark.nodes[0].frontmatter.title}
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
