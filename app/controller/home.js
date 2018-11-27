'use strict';

const Controller = require('egg').Controller;
var helper = require('../extend/helper')

class HomeController extends Controller {
  async index() {
    const {config} = this
    var pathObj = helper.getPathObj()
    pathObj.realname = this.ctx.user.realname
    pathObj.baseurl = config.htmldomain
    pathObj.baseimgurl = config.imgdomain
    await this.ctx.render('index.html', pathObj);
  }
  async logout() {
    this.ctx.logout()
    this.ctx.redirect('/login')
  }
  async xxx() {
    console.log('xxx ok')
    await this.ctx.render('xxx.html', {url:this.ctx.app.config.baseUrl});
  }
  async login() {
    await this.ctx.render('login.html', {url:this.ctx.app.config.baseUrl});
  }
}


module.exports = HomeController;


