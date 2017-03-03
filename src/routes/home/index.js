import React from 'react';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action() {
    return {
      title: 'React Starter Kit',
      component: <Layout><div className="container">Home</div></Layout>,
    };
  },

};
