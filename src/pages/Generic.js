import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/services/saving1.jpeg';
import pic2 from '../assets/images/services/autoInsurer.jpeg';
import pic3 from '../assets/images/services/lifeInsurer.jpeg';
import pic4 from '../assets/images/services/pymes.jpeg';
import pic5 from '../assets/images/services/educationInsurer.jpeg';
import pic6 from '../assets/images/services/policehealth.jpeg';
import pic7 from '../assets/images/services/policycumpli.jpeg';
import pic8 from '../assets/images/services/civil.jpeg';
import pic9 from '../assets/images/services/traveler.jpeg';

import '../assets/sass/main.scss';
import Insurers from '../components/Insurers';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2 className="major-secondary">Servicios</h2>
          <p className="paragraph-secondary">
            Todo tipo de seguros que se ajustan a ti
          </p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <div className="image">
                <img src={pic1} alt="" />
              </div>
              <h3 className="major major-secondary">
                Programa de ahorro con beneficio tributario
              </h3>
              <p className="paragraph-secondary">
                Cras mattis ante fermentum, malesuada neque vitae, eleifend
                erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget
                mattis egestas, purus ipsum consequat orci, sit amet lobortis
                lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat
                auctor laoreet.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic2} alt="" />
              </div>
              <h3 className="major major-secondary"> Seguro de auto</h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic3} alt="" />
              </div>
              <h3 className="major major-secondary"> Seguro de vida</h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic4} alt="" />
              </div>
              <h3 className="major major-secondary"> Seguro para pymes</h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major major-secondary"> Seguro educativo</h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic6} alt="" />
              </div>
              <h3 className="major major-secondary"> Poliza de salud</h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic7} alt="" />
              </div>
              <h3 className="major major-secondary"> Poliza de cumplimiento</h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic8} alt="" />
              </div>
              <h3 className="major major-secondary"> Responsabilidad civil</h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <article>
              <div className="image">
                <img src={pic9} alt="" />
              </div>
              <h3 className="major major-secondary">
                {' '}
                Asistencia integral al viajero
              </h3>
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
            </article>
            <Insurers />
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
