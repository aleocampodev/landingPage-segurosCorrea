import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Layout from '../components/Layout';
import Insurers from '../components/Insurers';
import MainServices from '../components/MainServices';
import SectionWhatsApp from '../components/SectionWhatsApp';

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
  console.log(data, 'generic');
  return (
    <>
      <Layout fullMenu>
        <section id="wrapper">
          <header className="paddingHeader">
            <MainServices />
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
      </Layout>
      <SectionWhatsApp />
    </>
  );
};

export default IndexPage;
