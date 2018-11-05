'use strict';
const Controller = require('egg').Controller;
class ApiController extends Controller {
  // 检查用户数会否存在
  async queryUser() {
    const {app, ctx} = this
    var param = ctx.query;
    const result = await  app.mysql.select('user', {
      where: param
    })

    this.ctx.body = {
      result
    }
    this.ctx.status = 200
  }
  // 添加用户
  async addUser() {
    const {app, ctx} = this
    var params = Object.assign(ctx.request.body, {
      createtime: app.mysql.literals.now,
      updatetime: app.mysql.literals.now,
    })
    const result = await app.mysql.insert('user', params)
    ctx.body = {
      code: 200
    }
    this.ctx.status = 200
  }
  // 修改用户
  async updateUser() {
    const {app, ctx} = this
    var params = Object.assign(ctx.request.body, {
      updatetime: app.mysql.literals.now,
    })
    const result = await app.mysql.update('user', params);
    ctx.body = {
      code: 200
    }
    ctx.status = 200
  }
}

module.exports = ApiController;
