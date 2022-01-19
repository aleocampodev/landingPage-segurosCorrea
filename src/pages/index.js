import React from 'react';

import Layout from '../components/Layout';
import SectionWhatsApp from '../components/SectionWhatsApp';
import Banner from '../components/Banner';
import Wrapper from '../components/Wrapper';


import '../assets/sass/main.scss';

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Wrapper />
      </Layout>
      <SectionWhatsApp />
    </div>
  );
};

export default IndexPage;
