const hoverComponents = require('../../docs/hoverDoc')

const getCompoentApi = async (comp) => {
  try {
    if (hoverComponents[comp]) {
      // @ts-ignore
      const newMarkdown =hoverComponents[comp].hoverDoc
      return newMarkdown
    }
    return null
  } catch (error) {
    return null
  }
}

module.exports = {
  getCompoentApi
}