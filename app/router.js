'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/v/*', app.middlewares.checkauth(), controller.home.index);
  router.redirect('/', '/v/home', 302);
  router.get('/login',controller.home.login);
  router.get('/logout',controller.home.logout);
  router.post('/login', app.passport.authenticate('local', {
    successRedirect: '/v',
    failureRedirect: '/login?up_error=true'
  }));

  // api
  router.get('/api/queryuser', controller.api.queryUser)
  router.post('/api/adduser', controller.api.addUser)
  router.post('/api/updateuser', controller.api.updateUser)

};
