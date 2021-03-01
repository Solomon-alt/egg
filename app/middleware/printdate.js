// options  中间件的配置项，框架会将app.config[${middlewareName}]传递进来

// app:当前应用Application实例

//配置中间件 在config/config.default.js中进行配置
module.exports = (options, app) => {
    /*打印options的结果为config.default.js/
    config.printdate = {
        aaa: 'aaaaaa'
    }
    里面的aaaaaa
    */
    console.log(options);
    //返回一个异步的方法
    return async function printDate(ctx, next) {
        console.log(new Date());

        await next();
    }
}