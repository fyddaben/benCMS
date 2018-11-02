
const Controller = require('egg').Controller;
class ApiController extends Controller {
  async checkUser() {
    this.ctx.body = {
      name: 'egg'
    }
    this.ctx.status = 200
  }
}
