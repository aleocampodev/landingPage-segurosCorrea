const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: 'Empresa de consultoría',
    keywords:
      "seguros, seguros de carro, seguros de automovil, seguro educativo, ahorro, inversión, responsabilidad civil, sura, seguros bolivar'",
    image: '/src/assets/folderImages/img/logoSC.jpeg',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landingPage`,
        path: `${__dirname}/content/landingPage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/folderImages`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-remark-frontmatter',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: [
          'slick-slider',
          'slick-initialized',
          'slick-list',
          'slick-track',
          'slick-slide',
          'slick-active',
          'slick-current',
          'slick-theme',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
    },
  ],
};
