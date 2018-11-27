var _ = require('lodash')
module.exports = (options, app) => {
  return async function checkauth(ctx, next) {
    // 先判断登录
    if (ctx.isAuthenticated()) {
      //再判断权限
      let currentUrl = ctx.request.url
      let powerlist = ctx.user.powerlist
      if (currentUrl.indexOf('?')) {
        currentUrl = currentUrl.split('?')[0]
      }
      let listObj = JSON.parse(powerlist)
      let index = _.indexOf(listObj, currentUrl)
      if (index < 0) {
        ctx.redirect('/xxx.html');
      } else {
        await next();
      }
    } else {
      ctx.redirect('/login');
    }
  }
}
