'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        let list = await this.service.news.getNewsList() //getNewsList() 是service的方法
        let msg = await this.service.news.getMsg()
        await this.ctx.render('news', {
            list: list,
            msg: msg
        })
    }

    //获取service/news/getData中的数据

    async data() {
        let data = await this.service.news.getData()
            // this.ctx.body = "123" //控制台打印出了天王盖地虎，页面上显示123
        await this.ctx.render('shuju', {
            data
        })
    }

    async content() {

        //egg.js获取get传值 在路由后面加上?ad=123控制台上就会打印
        let query = this.ctx.query
        console.log(query);

        this.ctx.body = "新闻详情"


    }

    async newsList() {

            //获取动态路由传值
            let params = this.ctx.params

            console.log(params);

            this.ctx.body = "新闻列表"
        }
        //模板引擎配置
    async index() {
        await this.ctx.render('index')
    }
    async newscontent() {
        //获取get传值
        let aid = this.ctx.query.aid
        console.log(aid);

        let list = await this.ctx.service.news.getNewsContent(aid)

        console.log(list);
        await this.ctx.render('newscontent', {
            list
        })
    }
}

module.exports = NewsController;