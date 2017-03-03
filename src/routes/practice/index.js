import React from 'react';
import Layout from '../../components/Layout';
import Practice from './Practice.jsx';

const title = 'Practice';

export default {

  path: '/practice',

  action() {
    return {
      title,
      component: <Layout><Practice title={title} /></Layout>
    };
  },
};
