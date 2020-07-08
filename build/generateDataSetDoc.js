const fs = require('fs-extra')
const path = require('path')
const beautify = require('js-beautify').js
const unified = require('unified')
const markdown = require('remark-parse')
const axios = require('axios')
const { withDot, withoutDot, RulesMap } = require('./rules')

const outFile = '../docs/DataSetDoc.js'
const dataSetUrl = 'https://raw.githubusercontent.com/AboyL/choerodon-ui/master/components-pro/data-set/index.zh-CN.md'

const run = async () => {
  // const data = fs.readFileSync('./index.zh-CN.md', {
  //   encoding: 'utf-8'
  // })
  const data = (await axios.default.get(dataSetUrl)).data
  const tree = unified().use(markdown).parse(data)
  // 获取数据
  const dsDocs = {
    [withoutDot]: [],
    [withDot]: []
  }

  let currentType = ''

  // @ts-ignore
  tree.children.forEach((item) => {
    if (item.type === 'heading' && item.depth === 3) {
      // 用于设置type
      currentType = item.children[0].value
    }
    if (item.type === "table") {
      item.children.forEach((tableRow, tableRowIndex) => {
        const lastData = {}

        if (tableRowIndex === 0) {
          return
        }

        if (tableRow) {
          RulesMap[currentType].tabelCellRlue({
            arr: tableRow.children,
            lastData,
            currentType
          })
        }

        if (lastData.prefix) {
          dsDocs[RulesMap[currentType].dot].push(lastData)
        }
      });
    }
  })
  
  let str = JSON.stringify(dsDocs)
    .replace(/\"(vscode\.CompletionItemKind\.(Property|Variable|Method|Value|Snippet))\"/g,
      ($1, $2) => {
        return $2
      })
  str = `
  const vscode = require('vscode');

  const dsDocs =
  ${str};

  module.exports = dsDocs;
  `
  try {
    fs.outputFileSync(
      path.resolve(outFile),
      beautify(str, { indent_size: 2, space_in_empty_paren: true }))
  } catch (error) {
    console.log('error', error)
  }
  // fs.outputJsonSync('out.json', dsDocs, {
  //   spaces: '\t'
  // });

}

run()