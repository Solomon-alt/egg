'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }

    //使用egg-view-ejs
    ejs: {
        enable: true,
        package: 'egg-view-ejs'
    }
};