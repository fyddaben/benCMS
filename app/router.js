'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', app.middlewares.checkauth(), controller.home.index);
  router.get('/login',controller.home.login);
  router.get('/logout',controller.home.logout);
  router.post('/login', app.passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?up_error=true'
  }));

  // api
};
