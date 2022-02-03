const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: 'Empresa de consultoría',
    keywords:
      "seguros, seguros de carro, seguros de automovil, seguro educativo, ahorro, inversión, responsabilidad civil, sura, seguros bolivar'",
    image: config.manifestIcon,
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

    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',

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
        ignore: [
          '/node_modules/slick-carousel/slick/slick.css',
          '/node_modules/slick-carousel/slick/slick-theme.css',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.001, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: true, // Flag for disabling animations

        
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 10%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
  ],
};
