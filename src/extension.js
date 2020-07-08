const vscode = require('vscode');
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function (context) {
    console.log('恭喜，您的扩展“vscode-plugin-demo”已被激活！');
    console.log(vscode);
    // require('./hover-provider')(context); // 悬停提示
    require('./completion')(context);
    require('./site/openSite')(context)
    require('./hover-provider')(context)
    // const testFn = require('./test-require-function');
    // console.log(testFn); // vscode的日志输出不可靠，这里竟然会打印null？！
    // testFn(1, 2);

    // 自动提示演示，在dependencies后面输入.会自动带出依赖
    // this.dependencies.

};

/**
 * 插件被释放时触发
 */
exports.deactivate = function () {
    console.log('您的扩展“vscode-plugin-demo”已被释放！')
};