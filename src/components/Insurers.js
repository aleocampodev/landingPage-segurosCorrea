import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import '../assets/sass/main.scss';

const Insurers = () => {
  const data = useStaticQuery(graphql`
    query InsurersQuery {
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
          {data.allMarkdownRemark.nodes[24].frontmatter.title}
        </h2>
        <p className="paragraph-secondary">
          {data.allMarkdownRemark.nodes[24].frontmatter.description}
        </p>
        <Slider {...settings}>
          {data.allMarkdownRemark.nodes
            .filter((node, index) => index >= 5 && index <= 19)
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
