import React from 'react';
import Layout from '../../components/Layout';
import Note from './Note.jsx';

const title = 'Note';

export default {

  path: '/note',

  action() {
    return {
      title,
      component: <Layout><Note title={title} /></Layout>
    };
  },
};
