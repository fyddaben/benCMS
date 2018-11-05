'use strict';
var path = require('path')
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539398680991_5137';

  // add your config here
  config.middleware = ['proxy'];
  config.baseUrl = 'http://bcms.com/';
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.multipart = {
    //mode: 'file'
    fileSize: '500kb',
    whitelist: [
      '.png',
      '.jpg',
    ],
  }
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'cms',
    },
  };

  var targetHost = 'http://localhost:8080';
  config.proxy = {
    targets: {
      '/(.*).css': {
        target: targetHost,
        changeOrigin: true,
      },
      '/(.*).js': {
        target: targetHost,
        changeOrigin: true,
      },
      '/(.*).json': {
        target: targetHost,
        changeOrigin: true,
      },
      '/(.*).woff': {
        target: targetHost,
        changeOrigin: true,
      },
      '/(.*).ttf': {
        target: targetHost,
        changeOrigin: true,
      }
    }
  }
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    mapping: {
      '.html': 'ejs',
    },
  };

  return config;
};
