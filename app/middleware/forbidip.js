// options  中间件的配置项，框架会将app.config[${middlewareName}]传递进来

// app:当前应用Application实例

//配置中间件 在config/config.default.js中进行配置
module.exports = (options, app) => {

    //返回一个异步的方法
    return async function forbidip(ctx, next) {
        //要屏蔽的ip  1从数据库中获取  2从参数传入

        let forbidip = '127.0.0.1'; //要屏蔽的ip

        //获取客户端的ip
        console.log(ctx.request.ip)
            /*此时打印的为ip输入什么IP就打印什么如果是localhost:7001则什么都不打印，
            如果是本机iphttp://192.168.10.106:7001/则打印192.168.10.106
            此时已经获得到了ip，接下来就是屏蔽ip
            */

        //屏蔽ip
        if (ctx.request.ip === forbidip) {
            ctx.status = 403
            ctx.message = "您的ip已经被屏蔽" //返回一条信息
        }


        await next();
    }
}