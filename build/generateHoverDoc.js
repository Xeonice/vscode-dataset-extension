
const fs = require('fs-extra')
const path = require('path')
const beautify = require('js-beautify').js

const components = require('../src/utils/components')
const markdown = require('remark-parse')
const getMarkdown = require('remark-stringify')
const unified = require('unified')
const axios = require('axios')
const _ = require('lodash')

const baseUrl = `https://raw.githubusercontent.com/open-hand/choerodon-ui/master/components-pro/`

const run = async () => {
  const fileData = {}
  for (let item of components) {
    let comp = _.kebabCase(item.label)
    if (comp === 'view-component') {
      comp = 'core'
    }
    try {

      const componentUrl = `${baseUrl}${_.lowerFirst(comp)}/index.zh-CN.md`
      const data = (await axios.default.get(componentUrl)).data
      const tree = unified().use(markdown).parse(data)
      let newTree = {}
      // @ts-ignore
      for (let i = 0; i < tree.children.length; i++) {
        const item = tree.children[i]
        if (item.type === 'table') {
          newTree = item
          break
        }
      }
      if (newTree.type) {
        // @ts-ignore
        const newMarkdown = unified().use(getMarkdown).stringify(newTree)
        fileData[item.label] = {
          hoverDoc: newMarkdown,
        }
      }
    } catch (error) {
      console.error(item.label)
    }
  }
  let str = JSON.stringify(fileData)
  str = `
  const hoverDocs =
  ${str};

  module.exports = hoverDocs;
  `
  fs.outputFileSync(
    path.resolve('../docs/hoverDoc.js'),
    beautify(str, { indent_size: 2, space_in_empty_paren: true }))
}

run()

module.exports = {}