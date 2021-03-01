'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        // console.log(this);
        //egg给用户响应信息
        this.ctx.body = "用户管理"
    }
}

module.exports = AdminController;