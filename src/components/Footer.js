import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useStaticQuery, graphql, navigate } from 'gatsby';

const encode = data2 => {
  return Object.keys(data2)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data2[key]))
    .join('&');
};

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

  const backgroundFooter = data.allMarkdownRemark.nodes.find(
    element => element.frontmatter.title === 'Contacto'
  ).frontmatter.image.publicURL;

  const handleSubmit = (values, actions) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...values,
      }),
    })
      .then(() => {
        actions.resetForm();
        navigate('/Confirmacion');
      })
      .catch(error =>
        alert('Lo  sentimos ha ocurrido un error, intentalo mas tarde')
      );
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
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Requerido';
            } else if (values.name.length <= 1) {
              errors.name = 'Debe tener más de 2 caracteres';
            }
            if (!values.email) {
              errors.email = 'Requerido';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = 'Cuenta de email invalido';
            }
            if (!values.message) {
              errors.message = 'Requerido';
            } else if (values.name.length <= 1) {
              errors.message = 'Debe tener más de dos caracteres';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          <Form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-field" />
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Nombre</label>
                <Field type="text" name="name" id="name" placeholder="Nombre" />
                <ErrorMessage name="name">
                  {msg => <p className="form-errors">{msg}</p>}
                </ErrorMessage>
              </div>
              <div className="field">
                <label htmlFor="email">Correo</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ejemplo@gmail.com"
                />
                <ErrorMessage name="email">
                  {msg => <p className="form-errors">{msg}</p>}
                </ErrorMessage>
              </div>
              <div className="field">
                <label htmlFor="message">Mensaje</label>
                <Field
                  name="message"
                  id="message"
                  rows="4"
                  as="textarea"
                  placeholder="Mensaje"
                />
                <ErrorMessage name="message">
                  {msg => <p className="form-errors">{msg}</p>}
                </ErrorMessage>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Enviar" />
              </li>
            </ul>
          </Form>
        </Formik>
        <ul className="contact">
          <li>
            <a
              href="https://www.instagram.com/seguros_correa/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/seguros_correa/
            </a>
          </li>
          <li>comercial@seguroscorrea.com.co</li>
        </ul>
        <ul className="copyright">
          <li>{data.allMarkdownRemark.nodes[1].frontmatter.title} </li>
          <li>&copy; {new Date().getFullYear()}</li>
        </ul>
      </div>
    </section>
  );
}
