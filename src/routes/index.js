export default {

  path: '/',

  children: [
    require('./home').default,
    require('./top').default,
    require('./lessons').default,
    require('./slide').default,
    require('./movies').default,
    require('./note').default,
    require('./practice').default,

    require('./notFound').default,
  ],

  async action({ next }) {
    const route = await next();

    route.title = `${route.title || 'Untitled Page'} | 4eachデザイン`;
    route.description = route.description || '';

    return route;
  },

};
