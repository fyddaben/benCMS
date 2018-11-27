module.exports = app => {

  app.passport.verify(async (ctx, user) => {
    // 检查用户
    const results = await app.mysql.select('user', {
      where: {
        username: user.username,
        password: user.password
      }
    })
    if (results.length > 0) {
      const auth_token = user.username + '$$$$'; // 以后可能会存储更多信息，用 $$$$ 来分隔
      const opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true,
      };
      ctx.cookies.set(app.config.keys, auth_token, opts);
      return {
        id: results[0].id
      };
    }
    return null;
  });

  // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  app.passport.serializeUser(async (ctx, user) => {
    return {
      id: user.id
    };
  });

  // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  app.passport.deserializeUser(async (ctx, user) => {
    const results = await  app.mysql.query('select a.id,a.username,a.realname,a.createtime,b.rolename,b.powerlist from user a left join role b on a.roleid = b.id where a.id=? order by createtime ',[user.id])
    var newuser = {
      id: user.id,
      powerlist: results[0].powerlist,
      username: results[0].username,
      realname: results[0].realname
    }
    return newuser;
  });
};
