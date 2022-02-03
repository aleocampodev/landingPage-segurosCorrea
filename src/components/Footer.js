import React, { useEffect } from 'react';
import config from '../../config';
import { useStaticQuery, graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const backgroundFooter = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.title === 'Contacto'
  ).frontmatter.image.publicURL;

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        //...state,
      }),
    })
      .then(() => {
        console.log('hola');
        reset();
      })
      .catch(error => alert(error));
  };

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
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/confirmation"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  minLength: {
                    value: 6,
                    message: 'El nombre debe tener al menos 6 caracteres',
                  },
                })}
              />
              {errors.name && (
                <span className="form-errors">Este campo es requerido</span>
              )}
            </div>
            <div className="field">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ejemplo@gmail.com"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'El formato no es correcto',
                  },
                })}
              />
              {errors.name && (
                <span className="form-errors">El formato no es correcto</span>
              )}
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Mensaje"
                {...register('message', {
                  required: {
                    value: true,
                  },
                  minLength: {
                    value: 6,
                    message: 'El mensaje debe tener al menos 6 caracteres',
                  },
                })}
              ></textarea>
              {errors.name && (
                <span className="form-errors">Este campo es requerido</span>
              )}
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
                <a href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
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
