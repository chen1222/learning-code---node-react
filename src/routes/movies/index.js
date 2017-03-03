import React from 'react';
import Layout from '../../components/Layout';
import Movies from './Movies.jsx';

const title = 'Movies';

export default {

  path: '/movies',

  action() {
    return {
      title,
      component: <Layout><Movies title={title} /></Layout>
    };
  },
};
