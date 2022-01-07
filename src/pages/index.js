import React from 'react';

import Layout from '../components/Layout';
import SectionWhatsApp from '../components/SectionWhatsApp';
import Banner from '../components/Banner';
import Wrapper from '../components/Wrapper';
import { graphql } from 'gatsby';

import '../assets/sass/main.scss';

const IndexPage = ({ data }) => {
  console.log(data, 'hola');
  return (
    <div>
      <Layout>
        <Banner title={data.allMarkdownRemark.nodes[1].frontmatter.title} description={data.allMarkdownRemark.nodes[1].frontmatter.description} backgroundPic={data.allMarkdownRemark.nodes[1].frontmatter.image.publicURL}  subTitle={data.allMarkdownRemark.nodes[1].excerpt}/>
        <Wrapper />
      </Layout>
      <SectionWhatsApp />
    </div>
  );
};

export const query = graphql`
  {
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
`;

export default IndexPage;
