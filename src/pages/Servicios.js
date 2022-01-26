import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Insurers from '../components/Insurers';
import MainServices from '../components/MainServices';
import SectionWhatsApp from '../components/SectionWhatsApp';
import Footer from '../components/Footer';
import { Link } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "generalServices" } } }
      ) {
        nodes {
          frontmatter {
            title
            date
            subtitle
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
      <section id="wrapper">
        <header className="paddingHeader">
          <MainServices />

          <div id="header">
            <h1>
              <Link to="/">Inicio</Link>
            </h1>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
            <section className="features">
              {data.allMarkdownRemark.nodes.map((node, index) => (
                <article key={index}>
                  <div className="image">
                    <img
                      src={node.frontmatter.image.publicURL}
                      alt={node.frontmatter.image.alt}
                    />
                  </div>
                  <h3 className="major major-secondary">
                    {node.frontmatter.title}
                  </h3>
                  <p className="paragraph-secondary">
                    {node.frontmatter.description}
                  </p>
                </article>
              ))}
            </section>
            <Insurers />
          </div>
        </div>
      </section>
      <Footer />
      <SectionWhatsApp />
    </>
  );
};

export default IndexPage;
