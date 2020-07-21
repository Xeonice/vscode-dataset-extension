const vscode = require('vscode')
const components = require('../utils/components')
const { htmlTemplate } = require('./utils')
const url = `https://choerodon.github.io/choerodon-ui/zh/procmp/`

const openSite = (comp) => {
  const panel = vscode.window.createWebviewPanel(
    'component-view', // viewType
    "choerodon-ui", // 视图标题
    vscode.ViewColumn.Beside, // 显示在编辑器的哪个部位
    {
      enableScripts: true, // 启用JS，默认禁用
      retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
    }
  );

  let iframeSrc = `${url}${comp}`
  if (!comp.includes('dataset')) {
    iframeSrc += `#API`
  }
  
  panel.webview.html = htmlTemplate(iframeSrc)
}

// 注册一个文档 web view
// 获取当前的text
const dispose = (uri) => {

  if (components.length === 0) {
    return
  }

  if (uri) {
    const textEditor = vscode.window.activeTextEditor
    const document = textEditor.document
    const selection = textEditor.selection
    const word =
      document.getText(
        document.getWordRangeAtPosition(selection.start)
      );
    if (typeof word === 'string') {
      const item = components.find(
        v => v.label === word
      )
      if (item) {
        openSite(item.path)
        return
      }
    }
  }
  vscode.window.showQuickPick(components).then(selected => {
    selected && openSite(selected.path)
  })
}


module.exports = function (context) {

  context.subscriptions.push(
    vscode.commands.registerCommand('c7n.search', dispose),
  );

};