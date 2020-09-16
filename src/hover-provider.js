const vscode = require('vscode');
const { getCompoentApi } = require('../src/utils/provider')


/**
 * 组件文档悬浮提示提示 显示api部分的内容
 * @param {*} document 
 * @param {*} position 
 */
async function provideHover (document, position) {
    const word = document.getText(document.getWordRangeAtPosition(position));
    const text = document.getText()
    const isC7nComponentsRegExp = new RegExp(`choerodon-ui/pro`)
    const isC7nComponents = isC7nComponentsRegExp.test(text)
    if (isC7nComponents) {
        const api = await getCompoentApi(word)
        if (api) {
            return new vscode.Hover(`${api}`);
        }
    }
    return null
}

module.exports = function (context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider([
        'javascript',
        'javascriptreact',
        'typescript',
        'typescriptreact',
    ], {
        provideHover,
    }));
};