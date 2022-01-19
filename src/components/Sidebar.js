import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header
        id="header"
        className={`${fullMenu ? '' : 'alt'}`}
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h1>
            <Link to="/">Seguros Correa</Link>
          </h1>
        </div>

        <nav
          data-sal="flip-left"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
