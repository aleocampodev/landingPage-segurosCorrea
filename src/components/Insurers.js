import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import '../assets/sass/main.scss';

const Insurers = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            contentId: { eq: "logoInsurers" }
            image: { publicURL: {} }
          }
        }
      ) {
        nodes {
          frontmatter {
            title
            date
            subtitle
            description
            image {
              id
              publicURL
            }
            alt
          }
          excerpt
          html
        }
      }
    }
  `);
  console.log(data, 'holaI');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div className="inner">
      <div className="slider">
        <h2 className=" major-secondary">
          {data.allMarkdownRemark.nodes[0].frontmatter.title}
        </h2>
        <p className="paragraph-secondary">
          {data.allMarkdownRemark.nodes[0].frontmatter.description}
        </p>
        <Slider {...settings}>
          {data.allMarkdownRemark.nodes
            .filter((node, index) => index >= 1)
            .map((node, index) => {
              return (
                <div className="logoInsurer" key={index}>
                  <img
                    className="logoImage"
                    src={node.frontmatter.image.publicURL}
                    alt={node.frontmatter.alt}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Insurers;
