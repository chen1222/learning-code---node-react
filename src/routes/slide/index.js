import React from 'react';
import Layout from '../../components/Layout';
import Slide from './Slide.jsx';

const title = 'Slide';

export default {

  path: '/slide',

  action() {
    return {
      title,
      component: <Layout><Slide title={title} /></Layout>
    };
  },
};
