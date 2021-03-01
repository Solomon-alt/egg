/*
外部可以通过this.app.foo调用这个方法
*/

module.exports = {
    foo(param) {
        // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
        console.log('============================================================');
        // console.log(this)
        console.log('============================================================');
        return this.config.api;
    },
};