const _ = require('lodash')

const typeMapBodyMap = {
  'boolean': ['true', 'false'],
  "DataToJSON": [
    'dirty',
    'selected',
    'all',
    'normal',
    'dirty-self',
    'selected-self',
    'all',
    'all-self',
    'normal-self',
  ],
  'null': ['null']
}

const commonRule = ({ arr, lastData, currentType }) => {
  lastData.prefix = arr[0].children.map(v => v.value).join('')
  lastData.type = RulesMap[currentType].type
  lastData.description = `${_.snakeCase(currentType).replace(/_/g, '-')} - ${arr[1].children.map(v => v.value).join('')}`
  if (!arr[2]) {
    return
  }
  let type = arr[2].children.map(v => v.value).join('')
  lastData.body = [
    `${lastData.prefix}: \${1}`
  ]
  lastData.docs = `类型: ${type}`
}

const tabelCellRule_props = ({ arr, lastData, currentType }) => {
  // DataSet Props
  commonRule({ arr, lastData, currentType })
  if (!arr[2]) {
    return
  }
  let type = arr[2].children.map(v => v.value).join('')
  if (!arr[3]) {
    return
  }
  // 默认值
  const defaultValue = arr[3].children.map(v => v.value).join('')

  lastData.docs = `${lastData.docs}\n\n` +
    `默认值: ` + (defaultValue && `**${defaultValue}**`)

  // 针对 函数类型 布尔类型 对象类型 联合类型等进行统一的处理
  // 方案 
  // 假如有 string 且有默认值 使用默认值 否则使用 ''
  // 假如有 typeMapBodyMap 的内容 使用对应值
  // 假如有函数 使用函数处理
  // 其他情况 不处理

  const typeStrArr = type.split('|').map(v => _.trim(v))
  let typeArr = []
  typeStrArr.forEach((v) => {
    if (typeMapBodyMap[v]) {

      typeMapBodyMap[v].forEach((item) => {
        typeArr.push(item)
      })
    }

    if (v === 'string' && defaultValue) {
      typeArr.unshift(defaultValue)
    }

    if (v.startsWith('(')) {
      const trimTypeArr = v.split('=>')
      const f = trimTypeArr[0]
      const str = trimTypeArr[1]
      if (_.trim(str) === 'void') {
        typeArr.push(`${f} => { $1 }`)
      } else {
        typeArr.push(`${f} => { return $1 }`)
      }
    }

    typeArr = [...new Set(typeArr)].filter(v => v !== '')
    if (typeArr.length === 0) {
      lastData.body = [
        `${lastData.prefix}: \${1}`
      ]
    } else if (typeArr.length === 1) {
      typeArr[0] = typeArr[0].replace('$1', '$2')
      lastData.body = [
        `${lastData.prefix}: \${1:${typeArr[0]}}`
      ]
    } else {
      lastData.body = [
        `${lastData.prefix}: \${1|${typeArr.join(',')}|}`
      ]
    }
  })

  // 可选值 处理  最高优先级
  let desc = arr[1].children.map(v => v.value).join('')
  if (desc.includes('可选值')) {
    const chooseItem = arr[1].children.filter((item) => {
      return item.type === 'inlineCode'
    })
      .map((item) => { return item.value });
    if (chooseItem.length > 0) {
      lastData.body = [
        `${lastData.prefix}: \${1|${chooseItem.join(',')}}`
      ]
    }
  }

}

// 对 variable value 类型进行处理
const tabelCellRule_variable = ({ arr, lastData, currentType }) => {
  // DataSet Values,Record Values,Field Values 所有的values
  commonRule({ arr, lastData, currentType })
  lastData.body = [
    `${lastData.prefix}`
  ]
}

// 对 method 进行处理
const tabelCellRule_method = ({ arr, lastData, currentType }) => {
  // DataSet Methods,Record Methods,Field Methods
  commonRule({ arr, lastData, currentType })
  lastData.docs = `参数: ${arr[2].children.map(v => v.value).join('')}`
  if (arr[3]) {
    lastData.docs = `${lastData.docs}\n\n返回值类型: ${arr[3].children.map(v => v.value).join('')}`
  }
  lastData.body = [
    `${lastData.prefix}: \${1}`
  ]

  // 针对 vscode.CompletionItemKind.Method 进行特殊处理
  // 对参数进行处理
  // 修改 prefix
  let param = ''
  const prefix = lastData.prefix.replace(/\((.*)\)/, ($1, $2) => {
    param = _.trim($2) === '' ? '' : $2
      .split(',')
      .map(v => _.trim(v))
      .map((v, index) => `\${${index + 1}:${v}}`)
      .join(', ')
    return ''
  })

  // 修改 body
  lastData.body = [
    `${prefix}(${param})`
  ]
  lastData.prefix = prefix
}

const tabelCellRule_feedback = ({ arr, lastData, currentType }) => {
  // DataSet Methods,Record Methods,Field Methods
  commonRule({ arr, lastData, currentType })
  if (!arr[2]) {
    return
  }
  lastData.docs = `类型: Function`
  let param = ''
  const prefix = lastData.prefix.replace(/\((.*)\)/, ($1, $2) => {
    param = _.trim($2) === '' ? '' : $2
    return ''
  })
  // 修改 body
  lastData.body = [
    `${prefix}(( ${param} ) => {`,
    `\t$1`,
    `})`
  ]
}

const tabelCellRule_transport = ({ arr, lastData, currentType }) => {
  // transport
  commonRule({ arr, lastData, currentType })
  // 针对 vscode.CompletionItemKind.Snippet 进行特殊处理
  lastData.body = [
    `${lastData.prefix}: ({ data, params, dataSet }) => ({`,
    "\turl: '${1}',",
    "\tmethod: '${2}'",
    "})$0"
  ]
}


const dealWithFunctionType = (str, lastData, f) => {
  if (_.trim(str) === 'void') {
    return [
      `${lastData.prefix}: ${f} => {`,
      "\t$1",
      "}"
    ]
  } else {
    return [
      `${lastData.prefix}: ${f} => {`,
      `\treturn {$1} `,
      `}`
    ]
  }
}

const tabelCellRule_event = ({ arr, lastData, currentType }) => {
  // DataSet Events
  commonRule({ arr, lastData, currentType })
  // 针对 vscode.CompletionItemKind.Snippet 进行特殊处理
  let type = arr[2].children.map(v => v.value).join('')
  let paramDesc = arr[3].children.map((v, index) => {
    if ((index + 1) % 2 === 0 && (index + 1) !== arr[3].children.length) {
      return v.value + '| '
    }
    return v.value
  }).join('')
  lastData.docs = `钩子参数: ${type}\n\n 参数说明: ${paramDesc}`

  const trimType = _.trim(type)
  // 函数处理 event
  const trimTypeArr = trimType.split('=>')
  const f = trimTypeArr[0]
  lastData.body = dealWithFunctionType(trimTypeArr[1], lastData, f)
}

const withoutDot = 'withoutDot'
const withDot = 'withDot'

const RulesMap = {
  "DataSet Props": {
    type: "vscode.CompletionItemKind.Property",
    dot: withoutDot,
    tabelCellRlue: tabelCellRule_props
  },
  'DataSet Values': {
    type: "vscode.CompletionItemKind.Variable",
    dot: withDot,
    tabelCellRlue: tabelCellRule_variable
  },
  'DataSet Methods': {
    type: "vscode.CompletionItemKind.Method",
    dot: withDot,
    tabelCellRlue: tabelCellRule_method
  },
  'DataSet Events': {
    type: "vscode.CompletionItemKind.Property",
    dot: withoutDot,
    tabelCellRlue: tabelCellRule_event
  },
  'Record Values': {
    type: "vscode.CompletionItemKind.Value",
    dot: withDot,
    tabelCellRlue: tabelCellRule_variable
  },
  'Record Methods': {
    type: "vscode.CompletionItemKind.Method",
    dot: withDot,
    tabelCellRlue: tabelCellRule_method
  },
  'Field Props': {
    type: "vscode.CompletionItemKind.Property",
    dot: withoutDot,
    tabelCellRlue: tabelCellRule_props
  },
  'Field Values': {
    type: "vscode.CompletionItemKind.Value",
    dot: withDot,
    tabelCellRlue: tabelCellRule_variable
  },
  'Field Methods': {
    type: "vscode.CompletionItemKind.Method",
    dot: withDot,
    tabelCellRlue: tabelCellRule_method
  },
  'Transport': {
    type: "vscode.CompletionItemKind.Snippet",
    dot: withoutDot,
    tabelCellRlue: tabelCellRule_transport
  },
  'Feedback': {
    type: "vscode.CompletionItemKind.Property",
    dot: withoutDot,
    tabelCellRlue: tabelCellRule_feedback
  },
  'DataToJSON': {
    type: "vscode.CompletionItemKind.Variable",
    dot: withoutDot,
    tabelCellRlue: tabelCellRule_variable
  }
}


module.exports = {
  RulesMap,
  withoutDot,
  withDot
}