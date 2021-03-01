'use strict';

const Controller = require('egg').Controller;

//egg是一个mvc框架
/*
view  视图  页面的显示

controller  控制器，负责一些业务逻辑的处理

model  模型(service)：和数据打交道(查询数据库，请求数据,复杂业务逻辑)

更适合团队开发，业务逻辑清晰，有利于开发和维护

*/

class HomeController extends Controller {
    async index() {


        //调用config/config.default.js中的api；
        console.log(this.config.api);

        //调用service里面的方法
        let list = await this.service.news.getNewsList()
        let user = await this.service.user.getUserInfo()

        await this.ctx.render('home', {
            list: list,
            user: user
        })



    }
    async news() {
        const { ctx } = this;
        ctx.body = 'hi, news2222';
    }

    async update() {
        //调用extend中的application
        // await this.app.foo()
        console.log(this.app.foo());
        console.log('---------------------------------------------------------------');
        //调用extend中的context
        console.log(this.ctx.getHost());
    }
}

module.exports = HomeController;