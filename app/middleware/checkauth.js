
module.exports = (options, app) => {
  return async function checkauth(ctx, next) {
    // 先判断登录
    if (ctx.isAuthenticated()) {
      //再判断权限
      console.log(ctx.request)
      await next();
    } else {
      ctx.redirect('/login');
    }
  }
}
