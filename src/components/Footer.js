import React, { useEffect } from 'react';
import config from '../../config';
import { useStaticQuery, graphql } from 'gatsby';
import AOS from 'aos';

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentId: { eq: "footer" } } }
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

  let AOS;
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require('aos');
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const backgroundFooter =
    data.allMarkdownRemark.nodes[0].frontmatter.image.publicURL;

  return (
    <section
      id="footer"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(25,38,101,0.9122023809523809) 0%, rgba(25,38,101,0.8449754901960784) 1%), url(${backgroundFooter})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: `#192665`,
      }}
    >
      <div className="inner" id="contacto">
        <h2 className="major major-secondary">
          {data.allMarkdownRemark.nodes[0].frontmatter.title}
        </h2>
        <p>{data.allMarkdownRemark.nodes[0].frontmatter.description}</p>
        <form
          method="post"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Correo</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>{data.allMarkdownRemark.nodes[1].frontmatter.title} </li>
          <li>&copy; {new Date().getFullYear()}</li>
        </ul>
      </div>
    </section>
  );
}
