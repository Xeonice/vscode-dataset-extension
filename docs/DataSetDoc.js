const vscode = require('vscode');

const dsDocs = {
  "withoutDot": [{
    "prefix": "name",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 对应后台 ds 的 name，自动生成约定的 submitUrl, queryUrl, tlsUrl, validateUrl",
    "body": ["name: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "data",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 初始化数据",
    "body": ["data: ${1}"],
    "docs": "类型: Array<object>\n\n默认值: "
  }, {
    "prefix": "autoQuery",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 初始化后自动查询",
    "body": ["autoQuery: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "autoQueryAfterSubmit",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 提交成功后响应的数据不符合回写条件时自动查询。注：回写条件是指响应数据中含有提交时的数据时，数据将按数据状态分组进行顺序回写，如果要更准确的回写，响应数据要含有提交时的__id 字段值。",
    "body": ["autoQueryAfterSubmit: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **true**"
  }, {
    "prefix": "autoCreate",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 初始化时，如果没有记录且 autoQuery 为 false，则自动创建记录",
    "body": ["autoCreate: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "autoLocateFirst",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 数据加载后自动定位到第一条记录",
    "body": ["autoLocateFirst: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **true**"
  }, {
    "prefix": "autoLocateAfterCreate",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 自动定位到新建记录",
    "body": ["autoLocateAfterCreate: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **true**"
  }, {
    "prefix": "autoLocateAfterRemove",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 当前数据被删除后自动定位到其他记录",
    "body": ["autoLocateAfterRemove: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **true**"
  }, {
    "prefix": "selection",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 选择的模式, 可选值：false 'multiple' 'single'",
    "body": ["selection: ${1|false,'multiple','single'}"],
    "docs": "类型: boolean | string\n\n默认值: **'multiple'**"
  }, {
    "prefix": "modifiedCheck",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询前，当有记录更改过时，是否警告提示。",
    "body": ["modifiedCheck: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "modifiedCheckMessage",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询前，当有记录更改过时，警告提示。",
    "body": ["modifiedCheckMessage: ${1}"],
    "docs": "类型: ReactNode | ModalProps\n\n默认值: "
  }, {
    "prefix": "pageSize",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 分页大小",
    "body": ["pageSize: ${1}"],
    "docs": "类型: number\n\n默认值: **10**"
  }, {
    "prefix": "paging",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 是否分页, server 主要为table的tree服务,约定total为根节点数目,index的定位都是基于根节点, 为server时候保证同时存在idField 和parentField(根节点为空或者undefind) 不然表现和原有版本一致",
    "body": ["paging: ${1|true,false|}"],
    "docs": "类型: boolean | server\n\n默认值: **true**"
  }, {
    "prefix": "dataKey",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询返回的 json 中对应的数据的 key, 当为 null 时对应整个 json 数据, json 不是数组时自动作为新数组的第一条数据",
    "body": ["dataKey: ${1|rows,null|}"],
    "docs": "类型: string | null\n\n默认值: **rows**"
  }, {
    "prefix": "totalKey",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询返回的 json 中对应的总数的 key",
    "body": ["totalKey: ${1:total}"],
    "docs": "类型: string\n\n默认值: **total**"
  }, {
    "prefix": "queryDataSet",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询条件数据源",
    "body": ["queryDataSet: ${1}"],
    "docs": "类型: DataSet\n\n默认值: "
  }, {
    "prefix": "queryUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询请求的 url。 当设定 name 时，默认 /dataset/{name}/queries",
    "body": ["queryUrl: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "queryParameter",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询请求的初始参数",
    "body": ["queryParameter: ${1}"],
    "docs": "类型: object\n\n默认值: "
  }, {
    "prefix": "submitUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 记录提交请求的 url。 当设定 name 时，默认 /dataset/{name}/mutations",
    "body": ["submitUrl: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "tlsUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 多语言查询请求的 url。 当设定 name 时， 默认 /dataset/{name}/languages",
    "body": ["tlsUrl: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "validateUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 远程校验查询请求的 url。 当设定 name 时， 默认 /dataset/{name}/validate",
    "body": ["validateUrl: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "exportUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 导出请求的 url。 当设定 name 时， 默认 /dataset/{name}/export",
    "body": ["exportUrl: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "transport",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 自定义 CRUD 请求配置, 详见 及 ",
    "body": ["transport: ${1}"],
    "docs": "类型: Transport\n\n默认值: "
  }, {
    "prefix": "feedback",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询和提交数据的反馈配置, 详见",
    "body": ["feedback: ${1}"],
    "docs": "类型: Feedback\n\n默认值: "
  }, {
    "prefix": "children",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 级联行数据集, 例： { name_1: dataSet1, name_2: dataSet2 }",
    "body": ["children: ${1}"],
    "docs": "类型: { name: DataSet }\n\n默认值: "
  }, {
    "prefix": "primaryKey",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 主键字段名，一般用作级联行表的查询字段",
    "body": ["primaryKey: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "idField",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 树形数据当前节点 id 字段名",
    "body": ["idField: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "parentField",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 树形数据当前父节点 id 字段名",
    "body": ["parentField: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "expandField",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 树形数据标记节点是否展开的字段名",
    "body": ["expandField: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "checkField",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 树形数据标记节点是否为选中的字段名，在展开按钮后面会显示 checkbox",
    "body": ["checkField: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "fields",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 字段属性数组，详见(#Field Props)",
    "body": ["fields: ${1}"],
    "docs": "类型: object[]\n\n默认值: "
  }, {
    "prefix": "queryFields",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 查询字段属性数组，在内部生成 queryDataSet，优先级低于 queryDataSet 属性，详见(#Field Props)",
    "body": ["queryFields: ${1}"],
    "docs": "类型: object[]\n\n默认值: "
  }, {
    "prefix": "cacheSelection",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 缓存选中记录，使切换分页时仍保留选中状态。当设置了 primaryKey 或有字段设置了 unique 才起作用。",
    "body": ["cacheSelection: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "axios",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 覆盖默认 axios",
    "body": ["axios: ${1}"],
    "docs": "类型: AxiosInstance\n\n默认值: "
  }, {
    "prefix": "dataToJSON",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 数据转为 json 的方式，详见",
    "body": ["dataToJSON: ${1|dirty,selected,all,normal,dirty-self,selected-self,all-self,normal-self|}"],
    "docs": "类型: DataToJSON\n\n默认值: **dirty**"
  }, {
    "prefix": "cascadeParams",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-props - 级联查询参数",
    "body": ["cascadeParams: ${1:(record, primaryKey)  => { return $2 }}"],
    "docs": "类型: (record, primaryKey) => object\n\n默认值: **(record, primaryKey) => primaryKey ? record.get(primaryKey) : record.toData()**"
  }, {
    "prefix": "update",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 值更新事件",
    "body": ["update: ({ dataSet, record, name, value, oldValue })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, record, name, value, oldValue }) => void\n\n 参数说明: dataSet - 数据集 | record - 更新的记录 | name - 更新的字段 | value - 新值 | oldValue - 旧值"
  }, {
    "prefix": "query",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 查询事件，返回值为 false 将阻止查询",
    "body": ["query: ({ dataSet, params, data })  => {", "\treturn {$1} ", "}"],
    "docs": "钩子参数: ({ dataSet, params, data }) => boolean\n\n 参数说明: dataSet - 数据集 | params - 查询参数 | data - 查询参数"
  }, {
    "prefix": "beforeLoad",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 数据加载前的事件， 用于处理请求数据",
    "body": ["beforeLoad: ({ dataSet, data })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, data }) => void\n\n 参数说明: dataSet - 数据集 | data - 请求数据"
  }, {
    "prefix": "load",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 数据加载完后事件",
    "body": ["load: ({ dataSet })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集"
  }, {
    "prefix": "loadFailed",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 数据加载失败事件",
    "body": ["loadFailed: ({ dataSet })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集"
  }, {
    "prefix": "submit",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 提交事件，返回值为 false 将阻止提交",
    "body": ["submit: ({ dataSet, data })  => {", "\treturn {$1} ", "}"],
    "docs": "钩子参数: ({ dataSet, data }) => boolean\n\n 参数说明: dataSet - 数据集 | data - json 数据"
  }, {
    "prefix": "submitSuccess",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 提交成功事件",
    "body": ["submitSuccess: ({ dataSet, data })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, data }) => void\n\n 参数说明: dataSet - 数据集 | data - 响应数据"
  }, {
    "prefix": "submitFailed",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 提交失败事件",
    "body": ["submitFailed: ({ dataSet })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集"
  }, {
    "prefix": "select",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 选择记录事件",
    "body": ["select: ({ dataSet, record, previous })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, record, previous }) => void\n\n 参数说明: dataSet - 数据集 | record - 选择的记录 | previous - 之前选择的记录，单选模式下有效"
  }, {
    "prefix": "unSelect",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 撤销选择记录事件",
    "body": ["unSelect: ({ dataSet, record })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, record }) => void\n\n 参数说明: dataSet - 数据集 | record - 撤销选择的记录"
  }, {
    "prefix": "selectAll",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 全选记录事件",
    "body": ["selectAll: ({ dataSet })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集"
  }, {
    "prefix": "unSelectAll",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 撤销全选记录事件",
    "body": ["unSelectAll: ({ dataSet })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集"
  }, {
    "prefix": "indexChange",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 当前记录变更事件",
    "body": ["indexChange: ({ dataSet, record, previous })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, record, previous }) => void\n\n 参数说明: dataSet - 数据集 | record - 新当前记录 | previous - 旧当前记录"
  }, {
    "prefix": "fieldChange",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 字段属性变更事件",
    "body": ["fieldChange: ({ dataSet, record, name, propsName, value, oldValue })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, record, name, propsName, value, oldValue }) => void\n\n 参数说明: dataSet - 数据集 | record - 字段所属记录，dataSet 的字段无 record | name - 字段名 | propsName - 属性名 | value - 新值 | oldValue - 旧值"
  }, {
    "prefix": "create",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 记录创建事件",
    "body": ["create: ({ dataSet, record })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, record }) => void\n\n 参数说明: dataSet - 数据集 | record - 创建的记录"
  }, {
    "prefix": "remove",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 记录移除事件",
    "body": ["remove: ({ dataSet, records })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, records }) => void\n\n 参数说明: dataSet - 数据集 | records - 移除的记录"
  }, {
    "prefix": "export",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 导出事件，返回值为 false 将阻止导出",
    "body": ["export: ({ dataSet, params, data })  => {", "\treturn {$1} ", "}"],
    "docs": "钩子参数: ({ dataSet, params, data }) => boolean\n\n 参数说明: dataSet - 数据集 | params - 查询参数 | data - 查询参数"
  }, {
    "prefix": "beforeDelete",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 数据删除前的事件， 返回值为 false 将阻止删除",
    "body": ["beforeDelete: ({ dataSet, records })  => {", "\treturn {$1} ", "}"],
    "docs": "钩子参数: ({ dataSet, records }) => boolean\n\n 参数说明: dataSet - 数据集 | records - 记录集"
  }, {
    "prefix": "reset",
    "type": vscode.CompletionItemKind.Property,
    "description": "data-set-events - 数据重置事件",
    "body": ["reset: ({ dataSet, records })  => {", "\t$1", "}"],
    "docs": "钩子参数: ({ dataSet, records }) => void\n\n 参数说明: dataSet - 数据集 | records - 记录集"
  }, {
    "prefix": "name",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 字段名",
    "body": ["name: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "type",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 字段类型，可选值：boolean number string date dateTime time week month year email url intl object",
    "body": ["type: ${1|boolean,number,string,date,dateTime,time,week,month,year,email,url,intl,object}"],
    "docs": "类型: string\n\n默认值: **string**"
  }, {
    "prefix": "order",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 排序类型，只支持单 field 排序， 如果多个 field 设置了 order，取第一个有 order 的 field，可选值：asc desc",
    "body": ["order: ${1|asc,desc}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "label",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 字段标签",
    "body": ["label: ${1}"],
    "docs": "类型: string | ReactNode\n\n默认值: "
  }, {
    "prefix": "labelWidth",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 字段标签宽度",
    "body": ["labelWidth: ${1}"],
    "docs": "类型: number\n\n默认值: "
  }, {
    "prefix": "format",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 字符串类型和日期类型字段值格式化。 字符串类型格式化可选值：'uppercase' 'lowercase' 'capitalize'",
    "body": ["format: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "pattern",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 正则校验",
    "body": ["pattern: ${1}"],
    "docs": "类型: string | RegExp\n\n默认值: "
  }, {
    "prefix": "maxLength",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 最大长度",
    "body": ["maxLength: ${1}"],
    "docs": "类型: number\n\n默认值: "
  }, {
    "prefix": "minLength",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 最小长度",
    "body": ["minLength: ${1}"],
    "docs": "类型: number\n\n默认值: "
  }, {
    "prefix": "max",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 最大值。 fieldName 指向当前记录的 fieldName 值作为最大值。",
    "body": ["max: ${1}"],
    "docs": "类型: number | MomentInput | fieldName\n\n默认值: "
  }, {
    "prefix": "min",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 最小值。 fieldName 指向当前记录的 fieldName 值作为最小值。",
    "body": ["min: ${1}"],
    "docs": "类型: number | MomentInput | fieldName\n\n默认值: "
  }, {
    "prefix": "step",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 步距",
    "body": ["step: ${1}"],
    "docs": "类型: number | { hour: number, minute: number, second: number }\n\n默认值: "
  }, {
    "prefix": "validator",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 校验器，当返回值为 false 或 涵盖错误信息的字符串，则为校验失败",
    "body": ["validator: ${1:(value, name, record)  => { return $2 }}"],
    "docs": "类型: (value, name, record) => boolean | string | undefined\n\n默认值: "
  }, {
    "prefix": "nonStrictStep",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 非严格步距，在非严格步距下，允许输入值不为步距的倍数加上最小值，也允许在设置整数步距的情况下输入小数",
    "body": ["nonStrictStep: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "required",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 是否必选",
    "body": ["required: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "readOnly",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 是否只读",
    "body": ["readOnly: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "disabled",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 是否禁用",
    "body": ["disabled: ${1|true,false|}"],
    "docs": "类型: boolean\n\n默认值: **false**"
  }, {
    "prefix": "textField",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 值列表的文本字段",
    "body": ["textField: ${1:meaning}"],
    "docs": "类型: string\n\n默认值: **meaning**"
  }, {
    "prefix": "valueField",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 值列表的值字段",
    "body": ["valueField: ${1:value}"],
    "docs": "类型: string\n\n默认值: **value**"
  }, {
    "prefix": "trueValue",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 类型为 boolean 时，true 对应的值",
    "body": ["trueValue: ${1|true,false|}"],
    "docs": "类型: boolean|string|number\n\n默认值: **true**"
  }, {
    "prefix": "falseValue",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 类型为 boolean 时，false 对应的值",
    "body": ["falseValue: ${1|false,true|}"],
    "docs": "类型: boolean|string|number\n\n默认值: **false**"
  }, {
    "prefix": "options",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 下拉框组件的菜单数据集",
    "body": ["options: ${1}"],
    "docs": "类型: DataSet\n\n默认值: "
  }, {
    "prefix": "group",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 是否分组，如果是 number，则为分组的顺序(暂无实装)",
    "body": ["group: ${1|true,false|}"],
    "docs": "类型: boolean|number\n\n默认值: "
  }, {
    "prefix": "defaultValue",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 默认值",
    "body": ["defaultValue: ${1}"],
    "docs": "类型: any\n\n默认值: "
  }, {
    "prefix": "multiple",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 是否为值数组。 当为字符串时，作为数据分隔符，查询时会将字符串分割成数组，提交时会将数组拼接成字符串",
    "body": ["multiple: ${1|false,true|}"],
    "docs": "类型: boolean| string\n\n默认值: **false**"
  }, {
    "prefix": "range",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 是否为范围值。 当为 true 时，则值为[startValue, endValue]；当为数组时，例如['start', 'end']时，则值为{ start: startValue, end: endValue }",
    "body": ["range: ${1|true,false|}"],
    "docs": "类型: boolean| [string, string]\n\n默认值: **false**"
  }, {
    "prefix": "unique",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 唯一索引或联合唯一索引组名。multiple 和 range 字段不适用。当 column 的 editor 设为 true 时，编辑器只会在新增的记录显示，如果要对已有数据进行编辑，请自定义 editor",
    "body": ["unique: ${1|false,true|}"],
    "docs": "类型: boolean| string\n\n默认值: **false**"
  }, {
    "prefix": "lovCode",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - LOV 配置代码",
    "body": ["lovCode: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "lovPara",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - LOV 或 Lookup 查询参数对象",
    "body": ["lovPara: ${1}"],
    "docs": "类型: object\n\n默认值: "
  }, {
    "prefix": "lookupCode",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 值列表代码",
    "body": ["lookupCode: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "lookupUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 值列表请求地址",
    "body": ["lookupUrl: ${1:(code)  => { return $2 }}"],
    "docs": "类型: string | (code) => string\n\n默认值: "
  }, {
    "prefix": "lovDefineUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - lov 配置请求地址",
    "body": ["lovDefineUrl: ${1:(code)  => { return $2 }}"],
    "docs": "类型: string | (code) => string\n\n默认值: "
  }, {
    "prefix": "lovQueryUrl",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - lov 查询请求地址",
    "body": ["lovQueryUrl: ${1:(code, config, { dataSet, params, data })  => { return $2 }}"],
    "docs": "类型: string | (code, config, { dataSet, params, data }) => string\n\n默认值: "
  }, {
    "prefix": "lookupAxiosConfig",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 值列表请求配置或返回配置的钩子，详见。配置中默认 url 为 lookupUrl， method 为 post。",
    "body": ["lookupAxiosConfig: ${1:({ dataSet, record, params, lookupCode })  => { return $2 }}"],
    "docs": "类型: AxiosRequestConfig| ({ dataSet, record, params, lookupCode }) => AxiosRequestConfig\n\n默认值: "
  }, {
    "prefix": "lovDefineAxiosConfig",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - lov 配置的请求配置或返回配置的钩子，详见。 配置中默认 url 为 lovDefineUrl， method 为 post。",
    "body": ["lovDefineAxiosConfig: ${1:(code)  => { return $2 }}"],
    "docs": "类型: AxiosRequestConfig| (code) => AxiosRequestConfig\n\n默认值: "
  }, {
    "prefix": "lovQueryAxiosConfig",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - lov 查询的请求配置或返回配置的钩子，详见。 配置中默认 url 为 lovQueryUrl， method 为 post。",
    "body": ["lovQueryAxiosConfig: ${1:(code, config, { dataSet, params, data })  => { return $2 }}"],
    "docs": "类型: AxiosRequestConfig| (code, config, { dataSet, params, data }) => AxiosRequestConfig\n\n默认值: "
  }, {
    "prefix": "bind",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 内部字段别名绑定",
    "body": ["bind: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "dynamicProps",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 动态属性对象。对象为字段属性和返回该字段值的钩子的键值对。原对象属性钩子将在 v1.0 版本中废弃。",
    "body": ["dynamicProps: ${1}"],
    "docs": "类型: { fieldProp: ({ dataSet, record, name }) => value }\n\n默认值: "
  }, {
    "prefix": "cascadeMap",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 快码和 LOV 查询时的级联参数映射。 例如：cascadeMap: { parentCodeValue: 'city' }，其中'city'是当前所在数据源的其他字段名，parentCodeValue 是快码和 LOV 的查询参数",
    "body": ["cascadeMap: ${1}"],
    "docs": "类型: object\n\n默认值: "
  }, {
    "prefix": "currency",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 货币代码，详见",
    "body": ["currency: ${1}"],
    "docs": "类型: string\n\n默认值: "
  }, {
    "prefix": "ignore",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 忽略提交, 可选值: always - 总是忽略 clean - 值未变化时忽略 never - 从不忽略",
    "body": ["ignore: ${1|always,clean,never}"],
    "docs": "类型: string\n\n默认值: **never**"
  }, {
    "prefix": "transformRequest",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 在发送请求之前对数据进行处理",
    "body": ["transformRequest: ${1:(value: any, record: Record)  => { return $2 }}"],
    "docs": "类型: (value: any, record: Record) => any\n\n默认值: "
  }, {
    "prefix": "transformResponse",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 在获得响应之后对数据进行处理",
    "body": ["transformResponse: ${1:(value: any, object: any)  => { return $2 }}"],
    "docs": "类型: (value: any, object: any) => any\n\n默认值: "
  }, {
    "prefix": "trim",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 字符串值是否去掉首尾空格，可选值: both left right none",
    "body": ["trim: ${1|both,left,right,none}"],
    "docs": "类型: string\n\n默认值: **both**"
  }, {
    "prefix": "defaultValidationMessages",
    "type": vscode.CompletionItemKind.Property,
    "description": "field-props - 默认校验信息，详见",
    "body": ["defaultValidationMessages: ${1}"],
    "docs": "类型: ValidationMessages\n\n默认值: "
  }, {
    "prefix": "create",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - 新建请求的 axios 配置或 url 字符串",
    "body": ["create: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet }) => AxiosRequestConfig | string"
  }, {
    "prefix": "read",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - 查询请求的 axios 配置或 url 字符串",
    "body": ["read: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet }) => AxiosRequestConfig | string"
  }, {
    "prefix": "update",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - 更新请求的 axios 配置或 url 字符串",
    "body": ["update: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet }) => AxiosRequestConfig | string"
  }, {
    "prefix": "destroy",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - 删除请求的 axios 配置或 url 字符串",
    "body": ["destroy: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet }) => AxiosRequestConfig | string"
  }, {
    "prefix": "validate",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - 唯一性校验请求的 axios 配置或 url 字符串。当字段配了 unique 属性时，在当前数据集中没有重复数据的情况下，则会发起远程唯一性校验。校验的请求 data 格式为 { unique: [{fieldName1: fieldValue1,fieldName2: fieldValue2...}] }，响应格式为 boolean | boolean[]。",
    "body": ["validate: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet }) => AxiosRequestConfig | string"
  }, {
    "prefix": "submit",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - create, update, destroy 的默认配置或 url 字符串。",
    "body": ["submit: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet }) => AxiosRequestConfig | string"
  }, {
    "prefix": "tls",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - 多语言数据请求的 axios 配置或 url 字符串。UI 接收的接口返回值格式为：[{ name: { zh_CN: '简体中文', en_US: '美式英语', ... }}]， 其中 name 是字段名。请使用全局配置 transport 的 tls 钩子统一处理。",
    "body": ["tls: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet, record, name }) => AxiosRequestConfig | string"
  }, {
    "prefix": "exports",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - 导出的配置或 url 字符串",
    "body": ["exports: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: AxiosRequestConfig | ({ data, params, dataSet }) => AxiosRequestConfig | string"
  }, {
    "prefix": "adapter",
    "type": vscode.CompletionItemKind.Snippet,
    "description": "transport - CRUD 配置适配器",
    "body": ["adapter: ({ data, params, dataSet }) => ({", "\turl: '${1}',", "\tmethod: '${2}'", "})$0"],
    "docs": "类型: (config: AxiosRequestConfig, type: string) => AxiosRequestConfig"
  }, {
    "prefix": "loadSuccess(resp)",
    "type": vscode.CompletionItemKind.Property,
    "description": "feedback - DataSet 查询成功的反馈, resp - 响应值",
    "body": ["loadSuccess(( resp ) => {", "\t$1", "})"],
    "docs": "类型: Function"
  }, {
    "prefix": "loadFailed(error)",
    "type": vscode.CompletionItemKind.Property,
    "description": "feedback - DataSet 查询失败的反馈, error - 异常对象",
    "body": ["loadFailed(( error ) => {", "\t$1", "})"],
    "docs": "类型: Function"
  }, {
    "prefix": "submitSuccess(resp)",
    "type": vscode.CompletionItemKind.Property,
    "description": "feedback - DataSet 提交成功的反馈, resp - 响应值",
    "body": ["submitSuccess(( resp ) => {", "\t$1", "})"],
    "docs": "类型: Function"
  }, {
    "prefix": "submitFailed(error)",
    "type": vscode.CompletionItemKind.Property,
    "description": "feedback - DataSet 提交失败的反馈, error - 异常对象",
    "body": ["submitFailed(( error ) => {", "\t$1", "})"],
    "docs": "类型: Function"
  }, {
    "prefix": "dirty",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 只转换变更的数据，包括本身无变更但级联有变更的数据",
    "body": ["dirty"]
  }, {
    "prefix": "selected",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 只转换选中的数据，无关数据的变更状态",
    "body": ["selected"]
  }, {
    "prefix": "all",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 转换所有数据",
    "body": ["all"]
  }, {
    "prefix": "normal",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 转换所有数据为普通 json，不会带上__status, __id 等附加字段，也不会出现临时删除的数据， 一般用于大 JSON 字段",
    "body": ["normal"]
  }, {
    "prefix": "dirty-self",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 同 dirty， 但不转换级联数据",
    "body": ["dirty-self"]
  }, {
    "prefix": "selected-self",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 同 selected， 但不转换级联数据",
    "body": ["selected-self"]
  }, {
    "prefix": "all-self",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 同 all， 但不转换级联数据",
    "body": ["all-self"]
  }, {
    "prefix": "normal-self",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-to-json - 同 normal， 但不转换级联数据",
    "body": ["normal-self"]
  }],
  "withDot": [{
    "prefix": "current",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 获取或者设置当前记录",
    "body": ["current"],
    "docs": "类型: observable<Record>"
  }, {
    "prefix": "currentPage",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 当前页码",
    "body": ["currentPage"],
    "docs": "类型: readonly observable<number>"
  }, {
    "prefix": "currentIndex",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 当前游标索引",
    "body": ["currentIndex"],
    "docs": "类型: observable<number>"
  }, {
    "prefix": "totalCount",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 总记录数",
    "body": ["totalCount"],
    "docs": "类型: observable<number>"
  }, {
    "prefix": "totalPage",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 总页数",
    "body": ["totalPage"],
    "docs": "类型: readonly observable<number>"
  }, {
    "prefix": "pageSize",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 分页大小",
    "body": ["pageSize"],
    "docs": "类型: observable<number>"
  }, {
    "prefix": "paging",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 是否分页",
    "body": ["paging"],
    "docs": "类型: observable<boolean>"
  }, {
    "prefix": "status",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 状态，loading submitting ready",
    "body": ["status"],
    "docs": "类型: observable<string>"
  }, {
    "prefix": "selection",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 选择的模式, 可选值：false 'multiple' 'single'",
    "body": ["selection"],
    "docs": "类型: observable<string|boolean>"
  }, {
    "prefix": "records",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 所有记录",
    "body": ["records"],
    "docs": "类型: observable<Record[]>"
  }, {
    "prefix": "all",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 所有记录, 包括缓存的选择记录",
    "body": ["all"],
    "docs": "类型: observable<Record[]>"
  }, {
    "prefix": "data",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 数据, 不包括删除状态的 Record",
    "body": ["data"],
    "docs": "类型: observable<Record[]>"
  }, {
    "prefix": "created",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 新建的数据",
    "body": ["created"],
    "docs": "类型: readonly observable<Record[]>"
  }, {
    "prefix": "updated",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 更新的数据",
    "body": ["updated"],
    "docs": "类型: readonly observable<Record[]>"
  }, {
    "prefix": "destroyed",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 暂时销毁的数据",
    "body": ["destroyed"],
    "docs": "类型: readonly observable<Record[]>"
  }, {
    "prefix": "selected",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 选中记录，包括缓存的选中记录",
    "body": ["selected"],
    "docs": "类型: readonly observable<Record[]>"
  }, {
    "prefix": "currentSelected",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 当前页选中记录",
    "body": ["currentSelected"],
    "docs": "类型: readonly observable<Record[]>"
  }, {
    "prefix": "cachedSelected",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 缓存的选中记录",
    "body": ["cachedSelected"],
    "docs": "类型: readonly observable<Record[]>"
  }, {
    "prefix": "length",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 数据量",
    "body": ["length"],
    "docs": "类型: readonly observable<number>"
  }, {
    "prefix": "queryDataSet",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 查询数据源",
    "body": ["queryDataSet"],
    "docs": "类型: observable<DataSet>"
  }, {
    "prefix": "parent",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 级联头数据源",
    "body": ["parent"],
    "docs": "类型: readonly observable<DataSet>"
  }, {
    "prefix": "children",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 所有级联行数据源",
    "body": ["children"],
    "docs": "类型: readonly [key:string]: DataSet}"
  }, {
    "prefix": "dirty",
    "type": vscode.CompletionItemKind.Variable,
    "description": "data-set-values - 含有状态不是 sync 的记录及 dirty 为 true 的记录",
    "body": ["dirty"],
    "docs": "类型: readonly observable<boolean>}"
  }, {
    "prefix": "ready",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 判断数据源是否准备就绪",
    "body": ["ready()"],
    "docs": "参数: \n\n返回值类型: Promise"
  }, {
    "prefix": "query",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 查询",
    "body": ["query(${1:page})"],
    "docs": "参数: page<optional,defualt:0> - 指定页码\n\n返回值类型: Promise<any>"
  }, {
    "prefix": "submit",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 将数据集中的增删改的记录先进行校验再进行远程提交。submit 会抛出请求的异常，请用 promise.catch 或 try-await-catch 来处理异常。",
    "body": ["submit()"],
    "docs": "参数: \n\n返回值类型: Promise<any> false - 校验失败，undefined - 无数据提交或提交相关配置不全，如没有 submitUrl。"
  }, {
    "prefix": "reset",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 重置更改, 并清除校验状态",
    "body": ["reset()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "locate",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到指定记录, 如果paging 为 true和server，则做远程查询 为server指代的是根节点节点的index坐标",
    "body": ["locate(${1:index})"],
    "docs": "参数: index - 记录索引\n\n返回值类型: Promise<Record>"
  }, {
    "prefix": "page",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到指定页码，如果paging 为 true和server，则做远程查询",
    "body": ["page(${1:page})"],
    "docs": "参数: page - 页码\n\n返回值类型: Promise<any>"
  }, {
    "prefix": "first",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到第一条记录，如果paging 为 true和server，则做远程查询 为server指代的第一个根节点",
    "body": ["first()"],
    "docs": "参数: \n\n返回值类型: Promise<Record>"
  }, {
    "prefix": "last",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到最后一条记录，如果paging 为 true和server，则做远程查询 为server指代的是最后的根节点",
    "body": ["last()"],
    "docs": "参数: Promise<Record>"
  }, {
    "prefix": "pre",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到上一条记录，如果paging 为 true和server，则做远程查询 为server指代的当前根节点的上一个根节点",
    "body": ["pre()"],
    "docs": "参数: \n\n返回值类型: Promise<Record>"
  }, {
    "prefix": "next",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到下一条记录，如果paging 为 true和server，则做远程查询 为server指代的当前根节点的下一个根节点",
    "body": ["next()"],
    "docs": "参数: \n\n返回值类型: Promise<Record>"
  }, {
    "prefix": "firstPage",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到第一页，如果paging 为 true和server，则做远程查询",
    "body": ["firstPage()"],
    "docs": "参数: \n\n返回值类型: Promise<any>"
  }, {
    "prefix": "lastPage",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到最后一页，如果paging 为 true和server，则做远程查询",
    "body": ["lastPage()"],
    "docs": "参数: \n\n返回值类型: Promise<any>"
  }, {
    "prefix": "prePage",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到上一页，如果paging 为 true和server，则做远程查询",
    "body": ["prePage()"],
    "docs": "参数: \n\n返回值类型: Promise<any>"
  }, {
    "prefix": "nextPage",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 定位到下一页，如果paging 为 true和server，则做远程查询",
    "body": ["nextPage()"],
    "docs": "参数: \n\n返回值类型: Promise<any>"
  }, {
    "prefix": "create",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 创建一条记录",
    "body": ["create(${1:data}, ${2:index})"],
    "docs": "参数: data - 记录数据对象；index<optional,default:0> - 记录所在的索引\n\n返回值类型: Record"
  }, {
    "prefix": "delete",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 立即删除记录",
    "body": ["delete(${1:records}, ${2:confirmMessage: ReactNode | ModalProps})"],
    "docs": "参数: records - 删除的记录或记录组 confirmMessage - 自定义提示信息或弹窗的属性\n\n返回值类型: "
  }, {
    "prefix": "remove",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 临时删除记录",
    "body": ["remove(${1:records})"],
    "docs": "参数: records - 删除的记录或记录组\n\n返回值类型: "
  }, {
    "prefix": "deleteAll",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 立即删除所有记录",
    "body": ["deleteAll(${1:confirmMessage: ReactNode | ModalProps})"],
    "docs": "参数: confirmMessage - 自定义提示信息或弹窗的属性\n\n返回值类型: "
  }, {
    "prefix": "removeAll",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 临时删除所有记录",
    "body": ["removeAll()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "push",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 将若干数据记录插入记录堆栈顶部",
    "body": ["push(${1:...records})"],
    "docs": "参数: records - 插入的记录列表\n\n返回值类型: number"
  }, {
    "prefix": "unshift",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 将若干数据记录插入记录堆栈底部",
    "body": ["unshift(${1:...records})"],
    "docs": "参数: records - 插入的记录列表\n\n返回值类型: number"
  }, {
    "prefix": "pop",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 从记录堆栈顶部获取记录",
    "body": ["pop()"],
    "docs": "参数: \n\n返回值类型: Record"
  }, {
    "prefix": "shift",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 从记录堆栈底部获取记录",
    "body": ["shift()"],
    "docs": "参数: \n\n返回值类型: Record"
  }, {
    "prefix": "splice",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 删除指定索引的若干记录，并可插入若干新记录",
    "body": ["splice(${1:from}, ${2:deleteCount}, ${3:...records})"],
    "docs": "参数: from<optional,default:0> - 索引开始的位置；deleteCount<optional,default:0> - 删除的数量； records - 插入的若干新记录\n\n返回值类型: Record[]"
  }, {
    "prefix": "slice",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 截取指定索引范围的记录集，不改变原记录堆栈",
    "body": ["slice(${1:start}, ${2:end})"],
    "docs": "参数: start<optional,default:0> - 开始索引；end<optional,default:记录堆栈长度> - 结束索引\n\n返回值类型: Record[]"
  }, {
    "prefix": "find",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据函数查找并返回第一条记录",
    "body": ["find(${1:fn})"],
    "docs": "参数: fn - 查询函数(record, index, array) => boolean\n\n返回值类型: Record"
  }, {
    "prefix": "findIndex",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据函数查找记录所在的索引",
    "body": ["findIndex(${1:fn})"],
    "docs": "参数: fn - 查询函数(record, index, array) => boolean\n\n返回值类型: number"
  }, {
    "prefix": "forEach",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据函数遍历",
    "body": ["forEach(${1:fn}, ${2:thisArg})"],
    "docs": "参数: fn - 遍历函数(record, index, array) => void\n\n返回值类型: "
  }, {
    "prefix": "map",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据函数遍历并输出新数组",
    "body": ["map(${1:fn}, ${2:thisArg})"],
    "docs": "参数: fn - 遍历函数(record, index, array) => any\n\n返回值类型: any[]"
  }, {
    "prefix": "some",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据函数遍历，当有返回值为 true 时，输出 true",
    "body": ["some(${1:fn}, ${2:thisArg})"],
    "docs": "参数: fn - 遍历函数(record, index, array) => boolean\n\n返回值类型: boolean"
  }, {
    "prefix": "every",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据函数遍历，当有返回值为 false 时，输出 false",
    "body": ["every(${1:fn}, ${2:thisArg})"],
    "docs": "参数: fn - 遍历函数(record, index, array) => boolean\n\n返回值类型: boolean"
  }, {
    "prefix": "filter",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据函数过滤并返回记录集",
    "body": ["filter(${1:fn}, ${2:thisArg})"],
    "docs": "参数: fn - 过滤函数(record, index, array) => boolean\n\n返回值类型: Record[]"
  }, {
    "prefix": "reduce",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 为数组中的所有元素调用指定的回调函数。 回调函数的返回值是累计结果，并在下次调用回调函数时作为参数提供",
    "body": ["reduce(${1:fn}, ${2:initialValue})"],
    "docs": "参数: fn - 过滤函数(previousValue, record, index, array) => value initialValue - 初始值\n\n返回值类型: typeof initialValue"
  }, {
    "prefix": "reduceRight",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 按降序调用数组中所有元素的指定回调函数。 回调函数的返回值是累计结果，并在下次调用回调函数时作为参数提供",
    "body": ["reduceRight(${1:fn}, ${2:initialValue})"],
    "docs": "参数: fn - 过滤函数(previousValue, record, index, array) => value initialValue - 初始值\n\n返回值类型: typeof initialValue"
  }, {
    "prefix": "indexOf",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 获取记录所在索引",
    "body": ["indexOf(${1:record}, ${2:fromIndex})"],
    "docs": "参数: record - 记录；fromIndex<optional> - 开始检索的索引\n\n返回值类型: number"
  }, {
    "prefix": "reverse",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 反转记录的顺序",
    "body": ["reverse()"],
    "docs": "参数: \n\n返回值类型: Record[]"
  }, {
    "prefix": "select",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 选中记录",
    "body": ["select(${1:record})"],
    "docs": "参数: record - 记录对象或记录的索引\n\n返回值类型: "
  }, {
    "prefix": "unSelect",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 取消选中记录",
    "body": ["unSelect(${1:record})"],
    "docs": "参数: record - 记录对象或记录的索引\n\n返回值类型: "
  }, {
    "prefix": "selectAll",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 全选当前页",
    "body": ["selectAll()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "unSelectAll",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 取消全选当前页",
    "body": ["unSelectAll()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "clearCachedSelected",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 清除缓存的选中记录",
    "body": ["clearCachedSelected()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "get",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 获取指定索引的记录",
    "body": ["get(${1:index})"],
    "docs": "参数: index - 记录索引\n\n返回值类型: Record"
  }, {
    "prefix": "getFromTree",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 从树形数据中获取指定索引的根节点记录",
    "body": ["getFromTree(${1:index})"],
    "docs": "参数: index - 记录索引\n\n返回值类型: Record"
  }, {
    "prefix": "validate",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 校验数据记录是否有效",
    "body": ["validate()"],
    "docs": "参数: \n\n返回值类型: Promise<boolean>"
  }, {
    "prefix": "getField",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 根据字段名获取字段",
    "body": ["getField(${1:fieldName})"],
    "docs": "参数: fieldName - 字段名\n\n返回值类型: Field"
  }, {
    "prefix": "addField",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 增加新字段",
    "body": ["addField(${1:fieldName}, ${2:fieldProps})"],
    "docs": "参数: fieldName - 字段名，fieldProps - 字段属性\n\n返回值类型: Field"
  }, {
    "prefix": "toJSONData",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 转换成用于提交的 json 数据",
    "body": ["toJSONData()"],
    "docs": "参数: \n\n返回值类型: object[]"
  }, {
    "prefix": "toData",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 转换成普通数据，不包含删除的数据",
    "body": ["toData()"],
    "docs": "参数: \n\n返回值类型: object[]"
  }, {
    "prefix": "bind",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 绑定头 DataSet",
    "body": ["bind(${1:ds}, ${2:name})"],
    "docs": "参数: ds - 头 DataSet 对象或 id name - 绑定名\n\n返回值类型: "
  }, {
    "prefix": "setQueryParameter",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 设置查询参数",
    "body": ["setQueryParameter(${1:para}, ${2:value})"],
    "docs": "参数: para - 参数名 value - 参数值\n\n返回值类型: "
  }, {
    "prefix": "loadData",
    "type": vscode.CompletionItemKind.Method,
    "description": "data-set-methods - 加载数据",
    "body": ["loadData(${1:data}, ${2:total})"],
    "docs": "参数: data - 数据数组 total - 总数，可选，用于分页\n\n返回值类型: "
  }, {
    "prefix": "id",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 唯一 ID，自增长的数字",
    "body": ["id"],
    "docs": "类型: number"
  }, {
    "prefix": "key",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 唯一键，主键字段或唯一索引键字段的值，默认同 id",
    "body": ["key"],
    "docs": "类型: string | number"
  }, {
    "prefix": "status",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 状态， 可选值 add update delete sync",
    "body": ["status"],
    "docs": "类型: observable<string>"
  }, {
    "prefix": "selectable",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 可选",
    "body": ["selectable"],
    "docs": "类型: observable<boolean>"
  }, {
    "prefix": "isSelected",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 是否选中",
    "body": ["isSelected"],
    "docs": "类型: observable<boolean>"
  }, {
    "prefix": "isCurrent",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 是否当前记录",
    "body": ["isCurrent"],
    "docs": "类型: observable<boolean>"
  }, {
    "prefix": "children",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 树形子数据集",
    "body": ["children"],
    "docs": "类型: Record[]| undefined"
  }, {
    "prefix": "parent",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 树形父数据",
    "body": ["parent"],
    "docs": "类型: Record| undefined"
  }, {
    "prefix": "previousRecord",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 树形中前一条数据",
    "body": ["previousRecord"],
    "docs": "类型: Record| undefined"
  }, {
    "prefix": "nextRecord",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 树形中后一条数据",
    "body": ["nextRecord"],
    "docs": "类型: Record| undefined"
  }, {
    "prefix": "level",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 树形层级",
    "body": ["level"],
    "docs": "类型: number"
  }, {
    "prefix": "dirty",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 数据是否发生变更， 包含级联数据源是否变更",
    "body": ["dirty"],
    "docs": "类型: boolean"
  }, {
    "prefix": "cascadeParent",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 级联父数据",
    "body": ["cascadeParent"],
    "docs": "类型: Record| undefined"
  }, {
    "prefix": "index",
    "type": vscode.CompletionItemKind.Value,
    "description": "record-values - 在数据源中的索引",
    "body": ["index"],
    "docs": "类型: number"
  }, {
    "prefix": "get",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 根据字段名获取字段值。注意：禁止通过 record.data[fieldName]的方式获取字段值。",
    "body": ["get(${1:fieldName})"],
    "docs": "参数: fieldName - 字段名\n\n返回值类型: any"
  }, {
    "prefix": "getPristineValue",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 根据字段名获取字段的原始值。",
    "body": ["getPristineValue(${1:fieldName})"],
    "docs": "参数: fieldName - 字段名\n\n返回值类型: any"
  }, {
    "prefix": "set",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 给指定字段赋值",
    "body": ["set(${1:fieldName}, ${2:value})"],
    "docs": "参数: fieldName - 字段名或者键值对对象；value - 值\n\n返回值类型: "
  }, {
    "prefix": "init",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 给指定字段初始化值。字段变为净值。",
    "body": ["init(${1:fieldName}, ${2:value})"],
    "docs": "参数: fieldName - 字段名或者键值对对象；value - 值\n\n返回值类型: "
  }, {
    "prefix": "setState",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 设置自定义状态值。",
    "body": ["setState(${1:key}, ${2:value})"],
    "docs": "参数: key - 键名或者键值对对象；value - 值\n\n返回值类型: "
  }, {
    "prefix": "getState",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 获取自定义状态值。",
    "body": ["getState(${1:key})"],
    "docs": "参数: key - 键名\n\n返回值类型: "
  }, {
    "prefix": "toJSONData",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 转换成用于提交的 json 数据, 受 DataSet 的 dataToJSON 属性影响。",
    "body": ["toJSONData()"],
    "docs": "参数: \n\n返回值类型: object"
  }, {
    "prefix": "toData",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 转换成普通数据, 包括所有级联数据",
    "body": ["toData()"],
    "docs": "参数: \n\n返回值类型: object"
  }, {
    "prefix": "validate",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 校验记录",
    "body": ["validate(${1:all}, ${2:noCascade})"],
    "docs": "参数: all - 校验所有字段，默认为 false，只校验修改或新增字段 noCascade - 为 true 时，不校验级联数据\n\n返回值类型: Promise<boolean>"
  }, {
    "prefix": "getCascadeRecords",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 根据级联名获取子级联数据",
    "body": ["getCascadeRecords(${1:childName})"],
    "docs": "参数: childName - 级联名\n\n返回值类型: Record[]"
  }, {
    "prefix": "getField",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 根据字段名获取字段",
    "body": ["getField(${1:fieldName})"],
    "docs": "参数: fieldName - 字段名\n\n返回值类型: Field"
  }, {
    "prefix": "clone",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 克隆记录，自动剔除主键值",
    "body": ["clone()"],
    "docs": "参数: \n\n返回值类型: Record"
  }, {
    "prefix": "ready",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 判断记录是否准备就绪",
    "body": ["ready()"],
    "docs": "参数: \n\n返回值类型: Promise"
  }, {
    "prefix": "reset",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 重置更改",
    "body": ["reset()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "save",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 保存当前数据至缓存",
    "body": ["save()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "restore",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 从缓存恢复保存的数据",
    "body": ["restore()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "clear",
    "type": vscode.CompletionItemKind.Method,
    "description": "record-methods - 清除所有数据",
    "body": ["clear()"],
    "docs": "参数: \n\n返回值类型: "
  }, {
    "prefix": "name",
    "type": vscode.CompletionItemKind.Value,
    "description": "field-values - 字段名",
    "body": ["name"],
    "docs": "类型: readonly string"
  }, {
    "prefix": "type",
    "type": vscode.CompletionItemKind.Value,
    "description": "field-values - 类型",
    "body": ["type"],
    "docs": "类型: observable<string>"
  }, {
    "prefix": "required",
    "type": vscode.CompletionItemKind.Value,
    "description": "field-values - 是否必选",
    "body": ["required"],
    "docs": "类型: observable<boolean>"
  }, {
    "prefix": "readOnly",
    "type": vscode.CompletionItemKind.Value,
    "description": "field-values - 是否只读",
    "body": ["readOnly"],
    "docs": "类型: observable<boolean>"
  }, {
    "prefix": "disabled",
    "type": vscode.CompletionItemKind.Value,
    "description": "field-values - 是否禁用",
    "body": ["disabled"],
    "docs": "类型: observable<boolean>"
  }, {
    "prefix": "get",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 根据属性名获取属性值",
    "body": ["get(${1:propsName})"],
    "docs": "参数: propsName - 属性名\n\n返回值类型: any"
  }, {
    "prefix": "set",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 设置属性值",
    "body": ["set(${1:propsName}, ${2:value})"],
    "docs": "参数: propsName - 属性名；value - 属性值\n\n返回值类型: -"
  }, {
    "prefix": "reset",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 重置设置的属性",
    "body": ["reset()"],
    "docs": "参数: \n\n返回值类型: -"
  }, {
    "prefix": "checkValidity",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 校验字段值",
    "body": ["checkValidity()"],
    "docs": "参数: \n\n返回值类型: boolean"
  }, {
    "prefix": "setLovPara",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 设置 Lov 的查询参数",
    "body": ["setLovPara(${1:para}, ${2:value})"],
    "docs": "参数: para - 参数名；value - 参数值\n\n返回值类型: -"
  }, {
    "prefix": "getValue",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 获取当前记录的本字段值",
    "body": ["getValue()"],
    "docs": "参数: any"
  }, {
    "prefix": "getText",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 根据 lookup 值获取 lookup 描述",
    "body": ["getText(${1:lookupValue})"],
    "docs": "参数: lookupValue - lookup 值，默认本字段值\n\n返回值类型: string"
  }, {
    "prefix": "getLookupData",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 根据 lookup 值获取 lookup 数据对象",
    "body": ["getLookupData(${1:lookupValue})"],
    "docs": "参数: lookupValue - lookup 值，默认本字段值\n\n返回值类型: object"
  }, {
    "prefix": "fetchLookup",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 请求 lookup 数据，若有缓存直接返回缓存数据。",
    "body": ["fetchLookup()"],
    "docs": "参数: \n\n返回值类型: Promise<object[]>"
  }, {
    "prefix": "isValid",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 是否校验通过",
    "body": ["isValid()"],
    "docs": "参数: \n\n返回值类型: boolean"
  }, {
    "prefix": "getValidationMessage",
    "type": vscode.CompletionItemKind.Method,
    "description": "field-methods - 获取校验信息",
    "body": ["getValidationMessage()"],
    "docs": "参数: \n\n返回值类型: string"
  }]
};

module.exports = dsDocs;