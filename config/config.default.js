/* eslint valid-jsdoc: "off" */

'use strict';

const forbidip = require("../app/middleware/forbidip");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1614160653426_9637';

    // add your middleware config here
    //增加配置中间件
    config.middleware = ['printdate', 'forbidip',
        // 'banip'
    ]; //printdate和middleware下的文件名一致

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    //配置模板引擎============================================================
    config.view = {
        mapping: {
            '.html': 'ejs',
        },
    }

    //给printdate中间件传入了参数
    config.printdate = {
        aaa: 'aaaaaa'
    }

    //给banip中间件传入了参数
    config.banip = {
        banip: [
            '127.0.0.1',
            '192.168.10.106'
        ]
    }

    //定义一个api地址
    config.api = 'http://www.phonegap100.com/';

    return {
        ...config,
        ...userConfig,
    };
};