import React from 'react';
import Layout from '../../components/Layout';
import Lessons from './Lessons.jsx';

const title = 'Lessons';

export default {

  path: '/lessons',

  action() {
    return {
      title,
      component: <Layout><Lessons title={title} /></Layout>
    };
  },
};
