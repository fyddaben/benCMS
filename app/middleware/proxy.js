var ppx = require('koa2-proxy-middleware');
module.exports = (options, app) => {
  return ppx(options);
}

