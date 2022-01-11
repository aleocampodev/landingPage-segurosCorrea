import React from 'react';
import config from '../../config';
import background from '../assets/images/img7.jpeg';
export default function Footer() {
  return (
    <section
      id="footer"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(25,38,101,0.9122023809523809) 0%, rgba(25,38,101,0.8449754901960784) 1%), url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: `#192665`,
      }}
    >
      <div className="inner">
        <h2 className="major major-secondary">Contacto</h2>
        <p>Ponte en contacto con nosotros, y con gusto te guiaremos.</p>
        <form method="post" action="/#">
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
          <li>Seguros Correa - Empresa de consultoría </li>
          <li>&copy; {new Date().getFullYear()}</li>
        </ul>
      </div>
    </section>
  );
}
