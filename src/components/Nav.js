import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menú</h2>
        <ul className="links">
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <a
              href="#loquehago"
              onClick={e => {
                onMenuToggle();
              }}
            >
              ¡Lo que hago!
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#principios"
            >
              Principios
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#servicios"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#testimonios"
            >
              Testimonios
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#contacto"
            >
              Contacto
            </a>
          </li>
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
