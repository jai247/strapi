'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('test-open-ai')
      .service('myService')
      .getWelcomeMessage();
  },
});
