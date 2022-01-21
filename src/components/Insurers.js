import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import '../assets/sass/main.scss';
import HeadInsurers from './HeadInsurers';

const Insurers = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "logoInsurers" } } }
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="inner">
      <div className="slider">
        <HeadInsurers />
        <div>
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
    </div>
  );
};

export default Insurers;
