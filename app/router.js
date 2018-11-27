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
  router.get('/xxx.html',controller.home.xxx);
  router.post('/login', app.passport.authenticate('local', {
    successRedirect: '/v/home',
    failureRedirect: '/login?up_error=true'
  }));

  // api
  router.get('/api/queryuser', controller.api.queryUser)
  router.get('/api/queryuserdetail', controller.api.queryUserDetail)
  router.post('/api/adduser', controller.api.addUser)
  router.post('/api/updateuser', controller.api.updateUser)
  router.post('/api/addrole', controller.api.addRole)
  router.get('/api/queryrole', controller.api.queryRole)
  router.post('/api/updaterole', controller.api.updateRole)

};
