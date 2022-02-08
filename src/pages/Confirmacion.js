import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Confirmacion = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "banner" } } }
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
  const logoSc = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.alt === 'Logo Seguros Correa'
  ).frontmatter.image.publicURL;

  return (
    <div className="form-confirmation">
      <div className="logo">
        <img
          src={logoSc}
          alt={
            data.allMarkdownRemark.nodes.find(
              element => element.frontmatter.alt === 'Logo Seguros Correa'
            ).frontmatter.image.publicURL
          }
          className="confirmation-icon"
        />
      </div>
      <h3 className="major-secondary">
        ¡Gracias por ponerte en contacto conmigo !
      </h3>
      <p className="paragraph-secondary">¡Tu mensaje ha sido enviado!</p>
      <p className="paragraph-secondary">
        Recibirás una respuesta en un plazo de 24-48 horas.
      </p>
      <ul className="actions">
        <li>
          <Link to="/" className="button">
            Volver al inicio
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Confirmacion;
