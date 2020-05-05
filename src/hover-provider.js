const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * 鼠标悬停提示，当鼠标停在package.json的dependencies或者devDependencies时，
 * 自动显示对应包的名称、版本号和许可协议
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 */
function provideHover(document, position, token) {
    const word        = document.getText(document.getWordRangeAtPosition(position));

    return new vscode.Hover(`* **名称**：${word}\n*`);
}

module.exports = function(context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('javascript', {
        provideHover
    }));
};