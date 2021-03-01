// options  中间件的配置项，框架会将app.config[${middlewareName}]传递进来

// app:当前应用Application实例

//配置中间件 在config/config.default.js中进行配置
module.exports = (options, app) => {

    //返回一个异步的方法
    return async function forbidip(ctx, next) {
        let banip = options.banip //要屏蔽的ip

        let clientIp = ctx.request.ip;
        // 输入的ip

        //查看 输入的ip再要屏蔽的IP里面没有 如果有就屏蔽

        // let hasip = banip.some((item) => {
        //     if (clientIp = item) {
        //         console.log(111);
        //         return true //表示屏蔽
        //     }
        //     if (hasip) {
        //         ctx.status = 403
        //         ctx.message = "您的ip已经被屏蔽" //返回一条信息
        //     } else {
        //         next()
        //     }
        // })


    }
}