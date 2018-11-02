'use strict';
var path = require('path')
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539398680991_5137';

  config.baseUrl = '/public/';

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
  // add your config here
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
