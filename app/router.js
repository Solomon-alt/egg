'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.home.news);
    router.get('/admin', controller.admin.index);
    router.get('/newsa', controller.news.index);
    router.get('/content', controller.news.content);
    router.get('/newslist/:id', controller.news.newsList) //动态路由传值
    router.get('/index', controller.news.index)
    router.get('/data', controller.news.data)
    router.get('/newscontent', controller.news.newscontent)
    router.get('/app', controller.home.update)
};