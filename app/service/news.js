'use strict';

const Service = require('egg').Service;

/*

  服务继承Service为了在this上面绑定一下方法

  this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
  this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
  this.service：应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。
  this.config：应用运行时的配置项。
  this.logger：logger 对象，上面有四个方法（debug，info，warn，error），
  分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，
  在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。


  服务的命名规则
  
*/

class NewsService extends Service {
    async getNewsList() {
        //获取config的数据
        console.log(this.config.api);


        //调用user服务的数据
        console.log(this.service.user.getUserInfo());

        //主要用于获取新闻数据

        let list = ['1111', '2222', '3333']
        return list
    }
    async getMsg() {
        let msg = 'ejs';
        return msg
    }
    async getData() {


        // 通过接口抓取返回数据
        // curl可以获取远程数据

        let url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1'


        let response = await this.ctx.curl(url)

        // console.log(response.data);  //返回的是Buffer

        let data = JSON.parse(response.data); //把Buffer 转换为对象

        // console.log(data)

        return data.result
    }
    async getNewsContent(aid) {
        //获取新闻详情

        // 通过接口抓取返回数据
        // curl可以获取远程数据

        let url = this.config.api + 'appapi.php?a=getPortalList&catid=' + aid


        let response = await this.ctx.curl(url)

        // console.log(response.data);  //返回的是Buffer

        let data = JSON.parse(response.data); //把Buffer 转换为对象


        return data.result
    }
}

module.exports = NewsService;