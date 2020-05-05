const dsDocs = {
    withoutDot: [
      {
        "prefix": "name",
        "body": [
          "name: ${1}"
        ],
        "description": "对应后台 ds 的 name，自动生成约定的 submitUrl, queryUrl, tlsUrl, validateUrl",
        "docs": "类型: _Array<object>_\n\n默认值: ",
      },
      {
        "prefix": "data",
        "body": [
          "data: ${1}"
        ],
        "description": "初始化数据",
        "docs": "类型: _Array<object>_\n\n默认值: ",
      },
      {
        "prefix": "autoQuery",
        "body": [
          "autoQuery: ${1|true,false|}"
        ],
        "description": "初始化后自动查询",
        "docs": "类型: _boolean_\n\n默认值: **false**",
      },
      {
        "prefix": "autoQueryAfterSubmit",
        "body": [
          "autoQueryAfterSubmit: ${1|true,false|}"
        ],
        "description": "提交成功后响应的数据不符合回写条件时自动查询。注：回写条件是指响应数据中含有提交时的数据时，数据将按数据状态分组进行顺序回写，如果要更准确的回写，响应数据要含有提交时的__id 字段值。",
        "docs": "类型: _boolean_\n\n默认值: **false**",
      },
      {
        "prefix": "autoCreate",
        "body": [
          "autoCreate: ${1|true,false|}"
        ],
        "description": "初始化时，如果没有记录且 autoQuery 为 false，则自动创建记录",
        "docs": "类型: _boolean_\n\n默认值: **false**",
      },
      {
        "prefix": "autoLocateFirst",
        "body": [
          "autoLocateFirst: ${1|true,false|}"
        ],
        "description": "数据加载后自动定位到第一条记录",
        "docs": "类型: _boolean_\n\n默认值: **true**",
      },
      {
        "prefix": "autoLocateAfterCreate",
        "body": [
          "autoLocateAfterCreate: ${1|true,false|}"
        ],
        "description": "自动定位到新建记录",
        "docs": "类型: _boolean_\n\n默认值: **true**",
      },
      {
        "prefix": "autoLocateAfterRemove",
        "body": [
          "autoLocateAfterRemove: ${1|true,false|}"
        ],
        "description": "当前数据被删除后自动定位到其他记录",
        "docs": "类型: _boolean_\n\n默认值: **true**",
      },
      {
        "prefix": "selection",
        "body": [
          "selection: ${1|false,'multiple','single'|}"
        ],
        "description": "查询前，当有记录更改过时，是否警告提示。",
        "docs": "类型: _boolean | string_ \n\n 默认值: **'multiple'**",
      },
      {
        "prefix": "modifiedCheck",
        "body": [
          "modifiedCheck: ${1|true,false|}"
        ],
        "description": "查询前，当有记录更改过时，是否警告提示。",
        "docs": "类型: _boolean_ \n\n 默认值: **false**",
      },
      {
        "prefix": "dataKey",
        "body": [
          "dataKey: ${1|'rows',null|}"
        ],
        "description": "查询返回的 json 中对应的数据的 key, 当为 null 时对应整个 json 数据, json 不是数组时自动作为新数组的第一条数据",
        "docs": "类型: _string | null_ \n\n 默认值: **'rows'**",
      },
      {
        "prefix": "totalKey",
        "body": [
          "totalKey: '${1:totel}'"
        ],
        "description": "查询返回的 json 中对应的总数的 key",
        "docs": "类型: _string_ \n\n 默认值: **'total'**",
      },
      {
        "prefix": "queryDataSet",
        "body": [
          "queryDataSet: {${1}}"
        ],
        "description": "查询条件数据源",
        "docs": "类型: _[DataSet](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn)_ \n\n 默认值: ",
      },
      {
        "prefix": "queryUrl",
        "body": [
          "queryUrl: '${1}'"
        ],
        "description": "查询请求的 url。 当设定 name 时，默认 /dataset/{name}/queries",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "queryParameter",
        "body": [
          "queryParameter: {${1}}"
        ],
        "description": "查询请求的初始参数",
        "docs": "类型: _object_ \n\n 默认值: ",
      },
      {
        "prefix": "submitUrl",
        "body": [
          "submitUrl: '${1}'"
        ],
        "description": "记录提交请求的 url。 当设定 name 时，默认 /dataset/{name}/mutations",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "tlsUrl",
        "body": [
          "tlsUrl: '${1}'"
        ],
        "description": "多语言查询请求的 url。 当设定 name 时， 默认 /dataset/{name}/languages",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "validateUrl",
        "body": [
          "validateUrl: '${1}'"
        ],
        "description": "dataSetPorps: validateUrl - 远程校验查询请求的 url。 当设定 name 时， 默认 /dataset/{name}/validate",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "exportUrl",
        "body": [
          "exportUrl: '${1}'"
        ],
        "description": "dataSetPorps: exportUrl - 导出请求的 url。 当设定 name 时， 默认 /dataset/{name}/export",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "transport",
        "body": [
          "transport: {",
          "\t${1}",
          "}"
        ],
        "description": "自定义 CRUD 请求配置, 详见Transport 及 AxiosRequestConfig",
        "docs": "类型: _[Transport](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn/#Transport)_ \n\n 默认值: ",
      },
      {
        "prefix": "children",
        "body": [
          "children: {",
          "\t${1:name}: ${2:DataSet}",
          "}"
        ],
        "description": "级联行数据集, 例： { name_1: dataSet1, name_2: dataSet2 }",
        "docs": "类型: _{ name: [DataSet](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn)_ } \n\n 默认值: ",
      },
      {
        "prefix": "primaryKey",
        "body": [
          "primaryKey: '${1}'"
        ],
        "description": "主键字段名，一般用作级联行表的查询字段",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "idField",
        "body": [
          "idField: '${1}'"
        ],
        "description": "树形数据当前节点 id 字段名",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "parentField",
        "body": [
          "parentField: '${1}'"
        ],
        "description": "树形数据当前父节点 id 字段名",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "expandField",
        "body": [
          "expandField: '${1}'"
        ],
        "description": "树形数据标记节点是否展开的字段名",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "checkField",
        "body": [
          "checkField: '${1}'"
        ],
        "description": "树形数据标记节点是否为选中的字段名，在展开按钮后面会显示 checkbox",
        "docs": "类型: _string_ \n\n 默认值: ",
      },
      {
        "prefix": "fields",
        "body": [
          "fields: [$1]"
        ],
        "description": "字段属性数组，详见Field Props",
        "docs": "类型: _object[[Field Props](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn/#Field-Props)]_ \n\n 默认值: ",
      },
      {
        "prefix": "queryFields",
        "body": [
          "queryFields: [$1]"
        ], 
        "description": "查询字段属性数组，在内部生成 queryDataSet，优先级低于 queryDataSet 属性，详见Field Props",
        "docs": "类型: _object[[Field Props](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn/#Field-Props)]_ \n\n 默认值: ",
      },
      {
        "prefix": "cacheSelection",
        "body": [
          "cacheSelection: ${1|false,true|}"
        ],
        "description": "缓存选中记录，使切换分页时仍保留选中状态。当设置了 primaryKey 或有字段设置了 unique 才起作用",
        "docs": "类型: _boolean_ \n\n 默认值: **false**",
      },
      {
        "prefix": "axiosInstanse",
        "body": [
          "axios: $1"
        ],
        "description": "覆盖默认 axios",
        "docs": "类型: _AxiosInstance_ \n\n 默认值: ",
      },
      {
        "prefix": "dataToJSON",
        "body": [
          "dataToJSON: '${1|dirty,selected,all,normal,dirty-self,selected-self,all-self,normal-self|}'"
        ],
        "description": "数据转为 json 的方式，详见DataToJSON",
        "docs": "类型: _[DataToJSON](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn/#DataToJSON)_ \n\n 默认值: **dirty**",
      },
      {
        "prefix": "cascadeParams",
        "body": [
          "cascaseParams: (record, primaryKey) => { return {$1} }"
        ],
        "description": "级联查询参数",
        "docs": "类型: _(record, primaryKey) => object_ \n\n 默认值: **(record, primaryKey) => primaryKey ? record.get(primaryKey) : record.toData()**",
      },
      // transport
      {
        "prefix": "create-axios",
        "body": [
          "create: {",
          "\turl: '${1}', ",
          "\tmethod: '${2:post}'",
          "}$0"
        ],
        "description": "Transport: create - 新建请求的 axios 配置或 url 字符串 - 返回 axios 对象"
      },
      {
        "prefix": "create-func",
        "body": [
          "create: ({ data, params, dataSet }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:post}'",
          "})$0"
        ],
        "description": "Transport: create - 新建请求的 axios 配置或 url 字符串 - 返回函数"
      },
      {
        "prefix": "read-axios",
        "body": [
          "read: {",
          "\turl: '${1}',",
          "\tmethod: '${2:get}'",
          "}$0"
        ],
        "description": "Transport: read - 查询请求的 axios 配置或 url 字符串 - 返回 axios 对象"
      },
      {
        "prefix": "read-func",
        "body": [
          "read: ({ data, params, dataSet }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:get}'",
          "})$0"
        ],
        "description": "Transport: read - 查询请求的 axios 配置或 url 字符串 - 返回函数"
      },
      {
        "prefix": "update-axios",
        "body": [
          "update: {",
          "\turl: '${1}',",
          "\tmethod: '${2:put}'",
          "}$0"
        ],
        "description": "Transport: update - 更新请求的 axios 配置或 url 字符串 - 返回 axios 对象"
      },
      {
        "prefix": "update-func",
        "body": [
          "update: ({ data, params, dataSet }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:put}'",
          "})$0"
        ],
        "description": "Transport: update - 更新请求的 axios 配置或 url 字符串 - 返回函数"
      },
      {
        "prefix": "destory-axios",
        "body": [
          "destory: {",
          "\turl: '${1}',",
          "\tmethod: '${2:delete}'",
          "}$0"
        ],
        "description": "Transport: destory - 删除请求的 axios 配置或 url 字符串 - 返回 axios 对象"
      },
      {
        "prefix": "destory-func",
        "body": [
          "destory: ({ data, params, dataSet }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:delete}'",
          "})$0"
        ],
        "description": "Transport: destory - 删除请求的 axios 配置或 url 字符串 - 返回函数"
      },
      {
        "prefix": "validate-axios",
        "body": [
          "validate: {",
          "\turl: '${1}',",
          "\tmethod: '${2:get}'",
          "}$0"
        ],
        "description": "Transport: validate - 唯一性校验请求的 axios 配置或 url 字符串。当字段配了 unique 属性时，在当前数据集中没有重复数据的情况下，则会发起远程唯一性校验。校验的请求 data 格式为 { unique: [{fieldName1: fieldValue1,fieldName2: fieldValue2...}] }，响应格式为 boolean | boolean[]。 - 返回 axios 对象"
      },
      {
        "prefix": "validate-func",
        "body": [
          "validate: ({ data, params, dataSet }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:get}'",
          "})$0"
        ],
        "description": "Transport: validate - 唯一性校验请求的 axios 配置或 url 字符串。当字段配了 unique 属性时，在当前数据集中没有重复数据的情况下，则会发起远程唯一性校验。校验的请求 data 格式为 { unique: [{fieldName1: fieldValue1,fieldName2: fieldValue2...}] }，响应格式为 boolean | boolean[]。 - 返回函数"
      },
      {
        "prefix": "submit-axios",
        "body": [
          "submit: {",
          "\turl: '${1}',",
          "\tmethod: '${2:post}'",
          "}$0"
        ],
        "description": "Transport: submit - create, update, destroy 的默认配置或 url 字符串。 - 返回 axios 对象"
      },
      {
        "prefix": "submit-func",
        "body": [
          "submit: ({ data, params, dataSet }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:post}'",
          "})$0"
        ],
        "description": "Transport: submit - create, update, destroy 的默认配置或 url 字符串。 - 返回函数"
      },
      {
        "prefix": "tls-axios",
        "body": [
          "tls: {",
          "\turl: '${1}',",
          "\tmethod: '${2:get}'",
          "}$0"
        ],
        "description": "Transport: tls - 多语言数据请求的 axios 配置或 url 字符串。UI 接收的接口返回值格式为：[{ name: { zh_CN: '简体中文', en_US: '美式英语', ... }}]， 其中 name 是字段名。请使用全局配置 transport 的 tls 钩子统一处理。 - 返回 axios 对象"
      },
      {
        "prefix": "tls-func",
        "body": [
          "tls: ({ data, params, dataSet, record, name }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:get}'",
          "})$0"
        ],
        "description": "Transport: tls - 多语言数据请求的 axios 配置或 url 字符串。UI 接收的接口返回值格式为：[{ name: { zh_CN: '简体中文', en_US: '美式英语', ... }}]， 其中 name 是字段名。请使用全局配置 transport 的 tls 钩子统一处理。 - 返回函数"
      },
      {
        "prefix": "exports-axios",
        "body": [
          "exports: {",
          "\turl: '${1}',",
          "\tmethod: '${2:post}'",
          "}$0"
        ],
        "description": "Transport: exports - 导出的配置或 url 字符串 - 返回 axios 对象"
      },
      {
        "prefix": "exports-func",
        "body": [
          "exports: ({ data, params, dataSet }) => ({",
          "\turl: '${1}',",
          "\tmethod: '${2:post}'",
          "})$0"
        ],
        "description": "Transport: exports - 导出的配置或 url 字符串 - 返回函数"
      },
      // field props
      {
        "prefix": "name",
        "body": [
          "name: ${1}"
        ],
        "description": "字段名",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "type",
        "body": [
          "type: '${2|boolean,number,string,date,dateTime,time,week,month,year,email,url,intl,object|}'",
        ],
        "description": "字段类型，可选值：boolean | number | string | date | dateTime | time | week | month | year | email | url | intl | object",
        "docs": "类型: _string_\n\n 默认值: string",
      },
      {
        "prefix": "order",
        "body": [
          "order: ${1|'asc','desc'|}"
        ],
        "description": "排序类型，只支持单 field 排序， 如果多个 field 设置了 order，取第一个有 order 的 field，可选值：asc desc",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "label",
        "body": [
          "label: ${1}"
        ],
        "description": "字段标签",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "labelWidth",
        "body": [
          "labelWidth: ${1}"
        ],
        "description": "字段标签宽度",
        "docs": "类型: _number_\n\n 默认值: ",
      },
      {
        "prefix": "format",
        "body": [
          "format: ${1|'uppercase','lowercase','capitalize'}"
        ],
        "description": "字符串类型和日期类型字段值格式化。 字符串类型格式化可选值：'uppercase' 'lowercase' 'capitalize'",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "pattern",
        "body": [
          "pattern: ${1}"
        ],
        "description": "正则校验",
        "docs": "类型: _string | RegExp_\n\n 默认值: ",
      },
      {
        "prefix": "maxLength",
        "body": [
          "maxLength： ${1}"
        ],
        "description": "最大长度",
        "docs": "类型: _number_\n\n 默认值: ",
      },
      {
        "prefix": "minLength",
        "body": [
          "minLength: ${1}"
        ],
        "description": "最小长度",
        "docs": "类型: _number_\n\n 默认值: ",
      },
      {
        "prefix": "max",
        "body": [
          "max: ${1}"
        ],
        "description": "最大值。 fieldName 指向当前记录的 fieldName 值作为最大值。",
        "docs": "类型: _number | MomentInput | fieldName_\n\n 默认值: ",
      },
      {
        "prefix": "min",
        "body": [
          "min: ${1}"
        ],
        "description": "最小值。 fieldName 指向当前记录的 fieldName 值作为最小值。",
        "docs": "类型: _number | MomentInput | fieldName_\n\n 默认值: ",
      },
      {
        "prefix": "step",
        "body": [
          "step: ${1|1, { hour: 1\\, minute: 1\\, second: 1 }|}"
        ],
        "description": "步距",
        "docs": "类型: _number | { hour: number, minute: number, second: number }_\n\n 默认值: ",
      },
      {
        "prefix": "validator",
        "body": [
          "validator: (value, name, record) => {",
          "\treturn ${1};",
          "}"
        ],
        "description": "校验器，当返回值为 false 或 涵盖错误信息的字符串，则为校验失败",
        "docs": "类型: _(value, name, record) => boolean | string | undefined_\n\n 默认值: ",
      },
      {
        "prefix": "required",
        "body": [
          "required: ${1|true,false|}"
        ],
        "description": "是否必选",
        "docs": "类型: _boolean_\n\n 默认值: false",
      },
      {
        "prefix": "readOnly",
        "body": [
          "readOnly: ${1|true,false|}"
        ],
        "description": "是否只读",
        "docs": "类型: _boolean_\n\n 默认值: false",
      },
      {
        "prefix": "disabled",
        "body": [
          "disabled: ${1|true,false}"
        ],
        "description": "是否禁用",
        "docs": "类型: _boolean_\n\n 默认值: false",
      },
      {
        "prefix": "textField",
        "body": [
          "textField: '${1}'"
        ],
        "description": "值列表的文本字段",
        "docs": "类型: _string_\n\n 默认值: meaning",
      },
      {
        "prefix": "valueField",
        "body": [
          "valueField: '${1}'"
        ],
        "description": "值列表的值字段",
        "docs": "类型: _string_\n\n默认值: **value**",
      },
      {
        "prefix": "trueValue",
        "body": [
          "trueValue: ${1:true}"
        ],
        "description": "类型为 boolean 时，true 对应的值",
        "docs": "类型: _boolean|string|number_\n\n 默认值: true",
      },
      {
        "prefix": "falseValue",
        "body": [
          "falseValue: ${1:false}"
        ],
        "description": "类型为 boolean 时，false 对应的值",
        "docs": "类型: _boolean|string|number_\n\n 默认值: false",
      },
      {
        "prefix": "options",
        "body": [
          "options: ${1}"
        ],
        "description": "下拉框组件的菜单数据集",
        "docs": "类型: _DataSet_\n\n 默认值: ",
      },
      {
        "prefix": "defaultValue",
        "body": [
          "defaultValue: ${1}"
        ],
        "description": "默认值",
        "docs": "类型: _any_\n\n 默认值: ",
      },
      {
        "prefix": "multiple",
        "body": [
          "multiple: ${1|true,false,''|}"
        ],
        "description": "是否为值数组。 当为字符串时，作为数据分隔符，查询时会将字符串分割成数组，提交时会将数组拼接成字符串",
        "docs": "类型: _boolean| string_\n\n 默认值: false",
      },
      {
        "prefix": "range",
        "body": [
          "range: ${1|false,true,[''\\,'']|}"
        ],
        "description": "是否为范围值。 当为 true 时，则值为[startValue, endValue]；当为数组时，例如['start', 'end']时，则值为{ start: startValue, end: endValue }",
        "docs": "类型: _boolean| string_\n\n 默认值: false",
      },
      {
        "prefix": "unique",
        "body": [
          "unique: ${1|false,true,''|}"
        ],
        "description": "唯一索引或联合唯一索引组名。multiple 和 range 字段不适用。当 column 的 editor 设为 true 时，编辑器只会在新增的记录显示，如果要对已有数据进行编辑，请自定义 editor",
        "docs": "类型: _boolean| string_\n\n 默认值: false",
      },
      {
        "prefix": "lovCode",
        "body": [
          "lovCode: '${1}'"
        ],
        "description": "LOV 配置代码",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "lovPara",
        "body": [
          "lovPara: {${1}}"
        ],
        "description": "LOV 或 Lookup 查询参数对象",
        "docs": "类型: _object_\n\n 默认值: ",
      },
      {
        "prefix": "lookupCode",
        "body": [
          "lookupCode: '${1}'"
        ],
        "description": "值列表代码",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "lookupUrl",
        "body": [
          "lookupUrl: ${1|'',(code) => { return ''; }|}"
        ],
        "description": "值列表请求地址",
        "docs": "类型: _string | (code) => string_\n\n 默认值: ",
      },
      {
        "prefix": "lovDefineUrl",
        "body": [
          "lovDefineUrl: ${1|'',(code) => { return ''; }|}"
        ],
        "description": "lov 配置请求地址",
        "docs": "类型: _string | (code) => string_\n\n 默认值: ",
      },
      {
        "prefix": "lovQueryUrl",
        "body": [
          "lovQueryUrl: ${1|'',(code\\, config\\, { dataSet\\, params\\, data }) => { return ''; }|}"
        ],
        "description": "lov 查询请求地址",
        "docs": "类型: _string | (code, config, { dataSet, params, data }) => string_\n\n 默认值: ",
      },
      {
        "prefix": "lookupAxiosConfig",
        "body": [
          "lookupAxiosConfig: ${1|{ url: ''\\, method: '' },({ dataSet\\, record\\, params\\, lookupCode }) => { return {} }|}"
        ],
        "description": "值列表请求配置或返回配置的钩子，详见AxiosRequestConfig。配置中默认 url 为 lookupUrl， method 为 post。",
        "docs": "类型: _AxiosRequestConfig | ({ dataSet, record, params, lookupCode }) => AxiosRequestConfig	_\n\n 默认值: ",
      },
      {
        "prefix": "lovDefineAxiosConfig",
        "body": [
          "lovDefineAxiosConfig: ${1|{ url: ''\\, method: '' },(code) => { return {} }|}"
        ],
        "description": "lov 配置的请求配置或返回配置的钩子，详见AxiosRequestConfig。 配置中默认 url 为 lovDefineUrl， method 为 post。",
        "docs": "类型: _AxiosRequestConfig| (code) => AxiosRequestConfig_\n\n 默认值: ",
      },
      {
        "prefix": "lovQueryAxiosConfig",
        "body": [
          "lovQueryAxiosConfig: ${1|'',(code, config, { dataSet\\, params\\, data }) => { return {} }|}"
        ],
        "description": "lov 查询的请求配置或返回配置的钩子，详见AxiosRequestConfig。 配置中默认 url 为 lovQueryUrl， method 为 post。",
        "docs": "类型: _AxiosRequestConfig| (code, config, { dataSet, params, data }) => AxiosRequestConfig_\n\n 默认值: ",
      },
      {
        "prefix": "bind",
        "body": [
          "bind: '${1}'"
        ],
        "description": "内部字段别名绑定",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "dynamicProps",
        "body": [
          "dynamicProps: {",
          "\t${1:name}({ dataSet, record, name }) {",
          "\t\treturn ${2}",
          "\t}",
          "}$0"
        ],
        "description": "动态属性对象。对象为字段属性和返回该字段值的钩子的键值对。原对象属性钩子将在 v1.0 版本中废弃。",
        "docs": "类型: _{ fieldProp: ({ dataSet, record, name }) => value }_\n\n 默认值: ",
      },
      {
        "prefix": "cascadeMap",
        "body": [
          "cascadeMap: {${1}}"
        ],
        "description": "快码和 LOV 查询时的级联参数映射。 例如：cascadeMap: { parentCodeValue: 'city' }，其中'city'是当前所在数据源的其他字段名，parentCodeValue 是快码和 LOV 的查询参数",
        "docs": "类型: _object_\n\n 默认值: ",
      },
      {
        "prefix": "currency",
        "body": [
          "currency: '${1|USD,CNY,JPY|}'"
        ],
        "description": "货币代码，详见Current currency & funds code list.",
        "docs": "类型: _string_\n\n 默认值: ",
      },
      {
        "prefix": "ignore",
        "body": [
          "ignore: '${1|always,clean,never|}'"
        ],
        "description": "忽略提交, 可选值: always - 总是忽略 | clean - 值未变化时忽略 | never - 从不忽略",
        "docs": "类型: _string_\n\n 默认值: never",
      },
      {
        "prefix": "transformRequest",
        "body": [
          "transformRequest: (value, record) => {$1}"
        ],
        "description": "在发送请求之前对数据进行处理",
        "docs": "类型: _(value: any, record: Record) => any_\n\n 默认值: ",
      },
      {
        "prefix": "transformResponse",
        "body": [
          "transformResponse: (value, object) => {$1}"
        ],
        "description": "在发送请求之前对数据进行处理",
        "docs": "类型: _(value: any, object: Record) => any_\n\n 默认值: ",
      },
      {
        "prefix": "trim",
        "body": [
          "trim: '${1|both,left,right|none|}'"
        ],
        "description": "字符串值是否去掉首尾空格，可选值: both left right none",
        "docs": "类型: _string_\n\n 默认值: both",
      },
      // fieldEvents
      {
        "prefix": "update",
        "body": [
          "update: function({ dataSet, record, name, value, oldValue }) {",
          "\t$1",
          "}"
        ],
        "description": "值更新事件",
        "docs": "钩子参数: ({ dataSet, record, name, value, oldValue }) => void\n\n 参数说明: dataSet - 数据集 | record - 更新的记录 | name - 更新的字段 | value - 新值 | oldValue - 旧值",
      },
      {
        "prefix": "query",
        "body": [
          "query: function({ dataSet, params, data }) {",
          "\t$1",
          "}"
        ],
        "description": "查询事件，返回值为 false 将阻止查询",
        "docs": "钩子参数: ({ dataSet, params, data }) => boolean\n\n 参数说明: dataSet - 数据集 | params - 查询参数 | data - 查询参数",
      },
      {
        "prefix": "beforeLoad",
        "body": [
          "beforeLoad: function({ dataSet, data }) {",
          "\t$1",
          "}"
        ],
        "description": "数据加载前的事件，用于处理请求数据",
        "docs": "钩子参数: ({ dataSet, data }) => void\n\n 参数说明: dataSet - 数据集 | data - 请求数据",
      },
      {
        "prefix": "load",
        "body": [
          "load: function({ dataSet }) {",
          "\t$1",
          "}"
        ],
        "description": "数据加载完后的事件",
        "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集",
      },
      {
        "prefix": "loadFailed",
        "body": [
          "loadFailed: function({ dataSet }) {",
          "\t$1",
          "}"
        ],
        "description": "数据加载失败后的事件",
        "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集",
      },
      {
        "prefix": "submit",
        "body": [
          "submit: function({ dataSet, data }) {",
          "\t$1",
          "}"
        ],
        "description": "提交事件，返回值为 false 将阻止提交",
        "docs": "钩子参数: ({ dataSet, data }) => boolean\n\n 参数说明: dataSet - 数据集 | data - json数据",
      },
      {
        "prefix": "submitSuccess",
        "body": [
          "submitSuccess: function({ dataSet, data }) {",
          "\t$1",
          "}"
        ],
        "description": "提交成功事件",
        "docs": "钩子参数: ({ dataSet, data }) => void\n\n 参数说明: dataSet - 数据集 | data - 响应事件",
      },
      {
        "prefix": "submitFailed",
        "body": [
          "submitFailed: function({ dataSet }) {",
          "\t$1",
          "}"
        ],
        "description": "提交失败事件",
        "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集",
      },
      {
        "prefix": "selecet",
        "body": [
          "select: function({ dataSet, record, previous }) {",
          "\t$1",
          "}"
        ],
        "description": "选择记录事件",
        "docs": "钩子参数: ({ dataSet, record, previous }) => void\n\n 参数说明: dataSet - 数据集 | record - 选择的记录 | previous - 之前选择的记录，单选模式下有效",
      },
      {
        "prefix": "unSelect",
        "body": [
          "unSelect: function({ dataSet, record }) {",
          "\t$1",
          "}"
        ],
        "description": "撤销选择记录事件",
        "docs": "钩子参数: ({ dataSet, record }) => void\n\n 参数说明: dataSet - 数据集 | record - 撤销选择的记录",
      },
      {
        "prefix": "selectAll",
        "body": [
          "selectAll: function({ dataSet }) {",
          "\t$1",
          "}"
        ],
        "description": "全选记录事件",
        "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集",
      },
      {
        "prefix": "unSelectAll",
        "body": [
          "unSelectAll: function({ dataSet }) {",
          "\t$1",
          "}"
        ],
        "description": "撤销全选记录事件",
        "docs": "钩子参数: ({ dataSet }) => void\n\n 参数说明: dataSet - 数据集",
      },
      {
        "prefix": "indexChange",
        "body": [
          "indexChange: function({ dataSet, record, previous }) {",
          "\t$1",
          "}"
        ],
        "description": "当前记录变更事件",
        "docs": "钩子参数: ({ dataSet, record, previous }) => void\n\n 参数说明: dataSet - 数据集 | record - 新当前记录 | previous - 旧当前记录",
      },
      {
        "prefix": "fieldChange",
        "body": [
          "fieldChange: function({ dataSet, record, name, propsName, value, oldValue }) {",
          "\t$1",
          "}"
        ],
        "description": "字段属性变更事件",
        "docs": "钩子参数: ({ dataSet, record, name, propsName, value, oldValue }) => void\n\n 参数说明: dataSet - 数据集 | record - 字段所属记录，dataSet 的字段无 | record name - 字段名 | propsName - 属性名 | value - 新值 | oldValue - 旧值",
      },
      {
        "prefix": "create",
        "body": [
          "create: function({ dataSet, record }) {",
          "\t$1",
          "}"
        ],
        "description": "记录创建事件",
        "docs": "钩子参数: ({ dataSet, record }) => void\n\n 参数说明: dataSet - 数据集 | record - 创建的记录",
      },
      {
        "prefix": "remove",
        "body": [
          "remove: function({ dataSet, records }) {",
          "\t$1",
          "}"
        ],
        "description": "记录移除事件",
        "docs": "钩子参数: ({ dataSet, records }) => void\n\n 参数说明: dataSet - 数据集 | records - 移除的记录",
      },
      {
        "prefix": "export",
        "body": [
          "export: function({ dataSet, params, data }) {",
          "\t$1",
          "}"
        ],
        "description": "导出事件，返回值为 false 将阻止导出",
        "docs": "钩子参数: ({ dataSet, params, data }) => boolean\n\n 参数说明: dataSet - 数据集 | params - 查询参数 | data - 查询参数",
      },
      {
        "prefix": "beforeDelete",
        "body": [
          "beforeDelete: function({ dataSet, records }) {",
          "\t$1",
          "}"
        ],
        "description": "数据删除前的事件， 返回值为 false 将阻止删除",
        "docs": "钩子参数: ({ dataSet, records }) => boolean\n\n 参数说明: dataSet - 数据集 | records - 记录集",
      },
      {
        "prefix": "reset",
        "body": [
          "reset: function({ dataSet, records }) {",
          "\t$1",
          "}"
        ],
        "description": "数据重置事件",
        "docs": "钩子参数: ({ dataSet, records }) => boolean\n\n 参数说明: dataSet - 数据集 | records - 记录集",
      }
    ],
    withDot: [
      // ds 的 value
      {
        "prefix": "current",
        "body": [
          "current"
        ],
        "description": "获取或者设置当前记录",
        "docs": "类型: _observable<Record>_",
      },
      {
        "prefix": "currentPage",
        "body": [
          "current"
        ],
        "description": "当前页码",
        "docs": "类型: _readonly observable<number>_",
      },
      {
        "prefix": "currentIndex",
        "body": [
          "currentIndex"
        ],
        "description": "当前游标索引",
        "docs": "类型: _observable<number>_",
      },
      {
        "prefix": "totalCount",
        "body": [
          "totalCount"
        ],
        "description": "总记录数",
        "docs": "类型: _observable<number>_",
      },
      {
        "prefix": "totalPage",
        "body": [
          "totalPage"
        ],
        "description": "总页数",
        "docs": "类型: _readonly observable<number>_",
      },
      {
        "prefix": "pageSize",
        "body": [
          "pageSize"
        ],
        "description": "分页大小",
        "docs": "类型: _observable<number>_",
      },
      {
        "prefix": "paging",
        "body": [
          "paging"
        ],
        "description": "是否分页",
        "docs": "类型: _observable<boolean>_",
      },
      {
        "prefix": "status",
        "body": [
          "status"
        ],
        "description": "状态: loading | submitting | ready",
        "docs": "类型: _observable<string>_",
      },
      {
        "prefix": "selection",
        "body": [
          "selection"
        ],
        "description": "选择的模式, 可选值：false | 'multiple' | 'single'",
        "docs": "类型: _observable<string|boolean>_",
      },
      {
        "prefix": "records",
        "body": [
          "records"
        ],
        "description": "所有记录",
        "docs": "类型: _observable<Record[]>_",
      },
      {
        "prefix": "all",
        "body": [
          "all"
        ],
        "description": "所有记录, 包括缓存的选择记录",
        "docs": "类型: _observable<Record[]>_",
      },
      {
        "prefix": "data",
        "body": [
          "data"
        ],
        "description": "数据, 不包括删除状态的 Record",
        "docs": "类型: _observable<Record[]>_",
      },
      {
        "prefix": "created",
        "body": [
          "created"
        ],
        "description": "新建的数据",
        "docs": "类型: _readonly observable<Record[]>_",
      },
      {
        "prefix": "updated",
        "body": [
          "updated"
        ],
        "description": "更新的数据",
        "docs": "类型: _readonly observable<Record[]>_",
      },
      {
        "prefix": "destroyed",
        "body": [
          "destroyed"
        ],
        "description": "暂时销毁的数据",
        "docs": "类型: _readonly observable<Record[]>_",
      },
      {
        "prefix": "selected",
        "body": [
          "selected"
        ],
        "description": "选中记录，包括缓存的选中记录",
        "docs": "类型: _readonly observable<Record[]>_",
      },
      {
        "prefix": "currentSelected",
        "body": [
          "currentSelected"
        ],
        "description": "当前页选中记录",
        "docs": "类型: _readonly observable<Record[]>_",
      },
      {
        "prefix": "cachedSelected",
        "body": [
          "cachedSelected"
        ],
        "description": "缓存的选中记录",
        "docs": "类型: _readonly observable<Record[]>_",
      },
      {
        "prefix": "length",
        "body": [
          "length"
        ],
        "description": "数据量",
        "docs": "类型: _readonly observable<number>_",
      },
      {
        "prefix": "queryDataSet",
        "body": [
          "queryDataSet"
        ],
        "description": "查询数据源",
        "docs": "类型: _observable<DataSet>_",
      },
      {
        "prefix": "parent",
        "body": [
          "parent"
        ],
        "description": "级联头数据源",
        "docs": "类型: _readonly observable<DataSet>_",
      },
      {
        "prefix": "children",
        "body": [
          "children"
        ],
        "description": "所有级联行数据源",
        "docs": "类型: _readonly [key:string]: DataSet}_",
      },
      {
        "prefix": "dirty",
        "body": [
          "dirty"
        ],
        "description": "含有状态不是 sync 的记录及 dirty 为 true 的记录",
        "docs": "类型: _readonly observable<boolean>_",
      },
      // ds 的 method
      {
        "prefix": "ready",
        "body": [
          "ready()"
        ],
        "description": "判断数据源是否准备就绪",
        "docs": "参数: \n\n返回值类型: Promise",
      },
      {
        "prefix": "query",
        "body": [
          "query($1)"
        ],
        "description": "含有状态不是 sync 的记录及 dirty 为 true 的记录",
        "docs": "参数: _`page`<optional,defualt:0> - 指定页码_\n\n返回值类型: Promise<any>",
      },
      {
        "prefix": "submit",
        "body": [
          "submit()"
        ],
        "description": "将数据集中的增删改的记录先进行校验再进行远程提交。submit 会抛出请求的异常，请用 promise.catch 或 try-await-catch 来处理异常。",
        "docs": "参数: \n\n返回值类型: Promise<any> false - 校验失败，undefined - 无数据提交或提交相关配置不全，如没有 submitUrl。",
      },
      {
        "prefix": "reset",
        "body": [
          "reset()"
        ],
        "description": "重置更改, 并清除校验状态",
        "docs": "",
      },
      {
        "prefix": "locate",
        "body": [
          "locate($1)"
        ],
        "description": "定位到指定记录, 如果paging 为 true，则做远程查询",
        "docs": "参数: _`index` - 记录索引_\n\n返回值类型: Promise<Record>",
      },
      {
        "prefix": "page",
        "body": [
          "page($1)"
        ],
        "description": "定位到指定页码，如果paging 为 true，则做远程查询",
        "docs": "参数: _`page` - 页码_\n\n返回值类型: Promise<any>",
      },
      {
        "prefix": "first",
        "body": [
          "first()"
        ],
        "description": "定位到第一条记录，如果paging 为 true，则做远程查询",
        "docs": "参数: \n\n返回值类型: Promise<Record>",
      },
      {
        "prefix": "last",
        "body": [
          "last()"
        ],
        "description": "定位到最后一条记录，如果paging 为 true，则做远程查询",
        "docs": "参数: \n\n返回值类型: Promise<Record>",
      },
      {
        "prefix": "pre",
        "body": [
          "pre()"
        ],
        "description": "定位到上一条记录，如果paging 为 true，则做远程查询",
        "docs": "参数: \n\n返回值类型: Promise<Record>",
      },
      {
        "prefix": "next",
        "body": [
          "next()"
        ],
        "description": "定位到下一条记录，如果paging 为 true，则做远程查询",
        "docs": "参数: \n\n返回值类型: Promise<Record>",
      },
      {
        "prefix": "firstPage",
        "body": [
          "firstPage()"
        ],
        "description": "定位到第一页，如果paging 为 true，则做远程查询",
        "docs": "参数: \n\n返回值类型: Promise<any>",
      },
      {
        "prefix": "lastPage",
        "body": [
          "lastPage()"
        ],
        "description": "定位到最后一页，如果paging 为 true，则做远程查询",
        "docs": "参数: \n\n返回值类型: Promise<any>",
      },
      {
        "prefix": "create",
        "body": [
          "create(${1:data}, ${2:index})"
        ],
        "description": "创建一条记录",
        "docs": "参数: `data` - 记录数据对象；`index<optional,default:0>` - 记录所在的索引\n\n返回值类型: Record",
      },
      {
        "prefix": "delete",
        "body": [
          "delete(${1:records}, ${2:'confirmMessage'})"
        ],
        "description": "立即删除记录",
        "docs": "参数: `records` - 删除的记录或记录组 `confirmMessage` - 自定义提示信息或弹窗的属性\n\n返回值类型: ",
      },
      {
        "prefix": "remove",
        "body": [
          "remove(${1:records})"
        ],
        "description": "临时删除记录",
        "docs": "参数: `records` - 删除的记录或记录组\n\n返回值类型:",
      },
      {
        "prefix": "deleteAll",
        "body": [
          "deleteAll(${1:confirmMessage})"
        ],
        "description": "立即删除所有记录",
        "docs": "参数: `confirmMessage` - 自定义提示信息或弹窗的属性\n\n返回值类型:",
      },
      {
        "prefix": "removeAll",
        "body": [
          "removeAll()"
        ],
        "description": "临时删除所有记录",
        "docs": "参数: \n\n返回值类型:",
      },
      {
        "prefix": "push",
        "body": [
          "push(${1:records})"
        ],
        "description": "将若干数据记录插入记录堆栈顶部",
        "docs": "参数: `records` - 插入的记录列表\n\n返回值类型: number",
      },
      {
        "prefix": "unshift",
        "body": [
          "unshift(${1:records})"
        ],
        "description": "将若干数据记录插入记录堆栈底部",
        "docs": "参数: `records` - 插入的记录列表	\n\n返回值类型: number",
      },
      {
        "prefix": "pop",
        "body": [
          "pop()"
        ],
        "description": "从记录堆栈顶部获取记录",
        "docs": "参数: \n\n返回值类型: Record",
      },
      {
        "prefix": "shift",
        "body": [
          "shift()"
        ],
        "description": "从记录堆栈底部获取记录",
        "docs": "参数: \n\n返回值类型: Record",
      },
      {
        "prefix": "splice",
        "body": [
          "splice(${1:from}, ${2:deleteCount}, ${3:record})"
        ],
        "description": "删除指定索引的若干记录，并可插入若干新记录",
        "docs": "参数: `from<optional,default:0>` - 索引开始的位置；`deleteCount<optional,default:0>` - 删除的数量； `records` - 插入的若干新记录\n\n返回值类型: Rerocd[]",
      },
      {
        "prefix": "slice",
        "body": [
          "slice(${1:start}, ${2:end})"
        ],
        "description": "截取指定索引范围的记录集，不改变原记录堆栈",
        "docs": "参数: `start<optional,default:0>` - 开始索引；`end<optional,default:记录堆栈长度>` -  结束索引；\n\n返回值类型: Rerocd[]",
      },
      {
        "prefix": "find",
        "body": [
          "find((record, index, array) => {$1})"
        ],
        "description": "根据函数查找并返回第一条记录",
        "docs": "参数: `fn` - 查询函数(record, index, array) => boolean\n\n返回值类型: Record",
      },
      {
        "prefix": "findIndex",
        "body": [
          "findIndex((record, index, array) => {$1})"
        ],
        "description": "根据函数查找记录所在的索引",
        "docs": "参数: `fn` - 查询函数(record, index, array) => boolean\n\n返回值类型: number",
      },
      {
        "prefix": "forEach",
        "body": [
          "forEach((record, index, array) => {$1})"
        ],
        "description": "根据函数遍历",
        "docs": "参数: `fn` - 遍历函数(record, index, array) => void\n\n返回值类型:",
      },
      {
        "prefix": "map",
        "body": [
          "map((record, index, array) => {$1})"
        ],
        "description": "根据函数遍历并输出新数组",
        "docs": "参数: `fn` - 遍历函数(record, index, array) => any[]\n\n返回值类型: any[]",
      },
      {
        "prefix": "some",
        "body": [
          "some((record, index, array) => {$1})"
        ],
        "description": "根据函数遍历",
        "docs": "参数: `fn` - 遍历函数(record, index, array) => boolean\n\n返回值类型: boolean",
      },
      {
        "prefix": "every",
        "body": [
          "every((record, index, array) => {$1})"
        ],
        "description": "根据函数遍历，当有返回值为 false 时，输出 false",
        "docs": "参数: `fn` - 遍历函数(record, index, array) => boolean\n\n返回值类型: boolean",
      },
      {
        "prefix": "filter",
        "body": [
          "filter((record, index, array) => {$1})"
        ],
        "description": "根据函数过滤并返回记录集",
        "docs": "参数: `fn` - 过滤函数(record, index, array) => Record[]\n\n返回值类型: Record[]",
      },
      {
        "prefix": "reduce",
        "body": [
          "reduce((record, index, array) => {$1}, ${2:initialValue})"
        ],
        "description": "为数组中的所有元素调用指定的回调函数。 回调函数的返回值是累计结果，并在下次调用回调函数时作为参数提供",
        "docs": "参数: `fn` - 过滤函数(previousValue, record, index, array) => value；`initialValue` - 初始值\n\n返回值类型: typeof initialValue",
      },
      {
        "prefix": "reduceRight",
        "body": [
          "reduceRight((record, index, array) => {$1}, ${2:initialValue})"
        ],
        "description": "按降序调用数组中所有元素的指定回调函数。 回调函数的返回值是累计结果，并在下次调用回调函数时作为参数提供",
        "docs": "参数: `fn` - 过滤函数(previousValue, record, index, array) => value；`initialValue` - 初始值\n\n返回值类型: typeof initialValue",
      },
      {
        "prefix": "indexOf",
        "body": [
          "indexOf(${1:record}, ${2:formIndex})"
        ],
        "description": "获取记录所在索引",
        "docs": "参数: `record` - 记录；`fromIndex<optional>` - 开始检索的索引\n\n返回值类型: number",
      },
      {
        "prefix": "reverse",
        "body": [
          "reverse()"
        ],
        "description": "反转记录的顺序",
        "docs": "参数: \n\n返回值类型: Record[]",
      },
      {
        "prefix": "select",
        "body": [
          "select(${1:record})"
        ],
        "description": "选中记录",
        "docs": "参数: `record` - 记录对象或记录的索引\n\n返回值类型:",
      },
      {
        "prefix": "unSelect",
        "body": [
          "unSelect(${1:record})"
        ],
        "description": "取消选中记录",
        "docs": "参数: `record` - 记录对象或记录的索引\n\n返回值类型:",
      },
      {
        "prefix": "selectAll",
        "body": [
          "selectAll()"
        ],
        "description": "全选当前页",
        "docs": "参数:\n\n返回值类型:",
      },
      {
        "prefix": "unSelectAll",
        "body": [
          "unSelectAll()"
        ],
        "description": "取消全选当前页",
        "docs": "参数:\n\n返回值类型:",
      },
      {
        "prefix": "clearCachedSelected",
        "body": [
          "clearCachedSelected()"
        ],
        "description": "清除缓存的选中记录",
        "docs": "参数:\n\n返回值类型:",
      },
      {
        "prefix": "get",
        "body": [
          "get(${1:index})"
        ],
        "description": "获取指定索引的记录",
        "docs": "参数: `index` - 记录索引\n\n返回值类型: Record",
      },
      {
        "prefix": "getFromTree",
        "body": [
          "getFromTree(${1:index})"
        ],
        "description": "获取指定索引的记录",
        "docs": "参数: `index` - 记录索引\n\n返回值类型: Record",
      },
      {
        "prefix": "validate",
        "body": [
          "validate()"
        ],
        "description": "获取指定索引的记录",
        "docs": "参数: `index` - 记录索引\n\n返回值类型: Record",
      },
      {
        "prefix": "getField",
        "body": [
          "getField(${1:fieldName})"
        ],
        "description": "获取指定索引的记录",
        "docs": "参数: `fieldName` - 字段名	\n\n返回值类型: Field",
      },
      {
        "prefix": "addField",
        "body": [
          "addField(${1:fieldName}, ${2:fieldProps})"
        ],
        "description": "获取指定索引的记录",
        "docs": "参数: `fieldName` - 字段名，`fieldProps` - 字段属性\n\n返回值类型: Field",
      },
      {
        "prefix": "toJSONData",
        "body": [
          "toJSONData()"
        ],
        "description": "转换成用于提交的 json 数据	",
        "docs": "参数:\n\n返回值类型: object[]",
      },
      {
        "prefix": "toData",
        "body": [
          "toData()"
        ],
        "description": "转换成普通数据，不包含删除的数据",
        "docs": "参数:\n\n返回值类型: object[]",
      },
      {
        "prefix": "bind",
        "body": [
          "bind(${1:ds}, ${2:name})"
        ],
        "description": "绑定头 DataSet",
        "docs": "参数: `ds` - 头 DataSet 对象或 id；`name` - 绑定名	\n\n返回值类型: ",
      },
      {
        "prefix": "setQueryParameter",
        "body": [
          "setQueryParameter(${1:para}, ${2:value})"
        ],
        "description": "设置查询参数",
        "docs": "参数: `para` - 参数名；`value` - 参数值	\n\n返回值类型: ",
      },
      {
        "prefix": "loadData",
        "body": [
          "loadData(${1:data}, ${2:total})"
        ],
        "description": "加载数据",
        "docs": "参数: 	`data` - 数据数组；`total` - 总数，可选，用于分页\n\n返回值类型: ",
      },
      // record values
      {
        "prefix": "id",
        "body": [
          "id"
        ],
        "description": "唯一 ID，自增长的数字",
        "docs": "类型: number",
      },
      {
        "prefix": "key",
        "body": [
          "key"
        ],
        "description": "唯一键，主键字段或唯一索引键字段的值，默认同 id",
        "docs": "类型: string | number",
      },
      {
        "prefix": "status",
        "body": [
          "status"
        ],
        "description": "状态， 可选值 add | update | delete | sync",
        "docs": "类型: observable<string>",
      },
      {
        "prefix": "selectable",
        "body": [
          "selectable"
        ],
        "description": "可选",
        "docs": "类型: observable<string>",
      },
      {
        "prefix": "isSelected",
        "body": [
          "isSelected"
        ],
        "description": "是否选中",
        "docs": "类型: observable<boolean>",
      },
      {
        "prefix": "isCurrent",
        "body": [
          "isCurrent"
        ],
        "description": "是否当前记录",
        "docs": "类型: observable<boolean>",
      },
      {
        "prefix": "children",
        "body": [
          "children"
        ],
        "description": "树形子数据集",
        "docs": "类型: Record[]| undefined",
      },
      {
        "prefix": "parent",
        "body": [
          "parent"
        ],
        "description": "树形父数据",
        "docs": "类型: Record| undefined",
      },
      {
        "prefix": "previousRecord",
        "body": [
          "previousRecord"
        ],
        "description": "树形中前一条数据",
        "docs": "类型: Record| undefined",
      },
      {
        "prefix": "nextRecord",
        "body": [
          "nextRecord"
        ],
        "description": "树形中后一条数据",
        "docs": "类型: Record| undefined",
      },
      {
        "prefix": "level",
        "body": [
          "level"
        ],
        "description": "树形层级",
        "docs": "类型: number",
      },
      {
        "prefix": "dirty",
        "body": [
          "dirty"
        ],
        "description": "数据是否发生变更， 包含级联数据源是否变更",
        "docs": "类型: boolean",
      },
      {
        "prefix": "cascadeParent",
        "body": [
          "cascadeParent"
        ],
        "description": "级联父数据",
        "docs": "类型: Record| undefined",
      },
      {
        "prefix": "index",
        "body": [
          "index"
        ],
        "description": "在数据源中的索引",
        "docs": "类型: number",
      },
      // record method
      {
        "prefix": "get",
        "body": [
          "get(${1:fieldName})"
        ],
        "description": "根据字段名获取字段值。注意：禁止通过 record.data[fieldName]的方式获取字段值。",
        "docs": "参数: `fieldName` - 字段名\n\n返回值类型: any",
      },
      {
        "prefix": "getPristineValue",
        "body": [
          "getPristineValue(${1:fieldName})"
        ],
        "description": "根据字段名获取字段的原始值。",
        "docs": "参数: `fieldName` - 字段名\n\n返回值类型: any",
      },
      {
        "prefix": "set",
        "body": [
          "set(${1:fieldName}, ${2:value})"
        ],
        "description": "给指定字段赋值",
        "docs": "参数: `fieldName` - 字段名或者键值对对象；`value` - 值\n\n返回值类型: ",
      },
      {
        "prefix": "init",
        "body": [
          "init(${1:fieldName}, ${2:value})"
        ],
        "description": "给指定字段初始化值。字段变为净值。",
        "docs": "参数: `fieldName` - 字段名或者键值对对象；`value` - 值\n\n返回值类型: ",
      },
      {
        "prefix": "setState",
        "body": [
          "setState(${1:key}, ${2:value})"
        ],
        "description": "设置自定义状态值。",
        "docs": "参数: `key` - 键名或者键值对对象；`value` - 值	\n\n返回值类型: ",
      },
      {
        "prefix": "getState",
        "body": [
          "getState(${1:key})"
        ],
        "description": "获取自定义状态值。",
        "docs": "参数: `key` - 键名\n\n返回值类型: any",
      },
      {
        "prefix": "toJSONData",
        "body": [
          "toJSONData()"
        ],
        "description": "转换成用于提交的 json 数据, 受 DataSet 的 dataToJSON 属性影响。",
        "docs": "参数: \n\n返回值类型: object",
      },
      {
        "prefix": "toData",
        "body": [
          "toData()"
        ],
        "description": "转换成普通数据, 包括所有级联数据",
        "docs": "参数: \n\n返回值类型: object",
      },
      {
        "prefix": "validate",
        "body": [
          "validate(${1:all}, ${2:noCascade})"
        ],
        "description": "校验记录",
        "docs": "参数: `all` - 校验所有字段，默认为 false，只校验修改或新增字段；`noCascade` - 为 true 时，不校验级联数据\n\n返回值类型: Promise<boolean>",
      },
      {
        "prefix": "getCascadeRecords",
        "body": [
          "getCascadeRecords(${1:childName})"
        ],
        "description": "根据级联名获取子级联数据",
        "docs": "参数: `childName` - 级联名\n\n返回值类型: Record[]",
      },
      {
        "prefix": "clone",
        "body": [
          "clone()"
        ],
        "description": "克隆记录，自动剔除主键值",
        "docs": "参数: \n\n返回值类型: Record",
      },
      {
        "prefix": "ready",
        "body": [
          "ready()"
        ],
        "description": "判断记录是否准备就绪",
        "docs": "参数: \n\n返回值类型: Promise",
      },
      {
        "prefix": "reset",
        "body": [
          "reset()"
        ],
        "description": "重置更改",
        "docs": "参数: \n\n返回值类型: ",
      },
      {
        "prefix": "save",
        "body": [
          "save()"
        ],
        "description": "保存当前数据至缓存",
        "docs": "参数: \n\n返回值类型: ",
      },
      {
        "prefix": "restore",
        "body": [
          "restore()"
        ],
        "description": "从缓存恢复保存的数据",
        "docs": "参数: \n\n返回值类型: ",
      },
      {
        "prefix": "clear",
        "body": [
          "clear()"
        ],
        "description": "清除所有数据",
        "docs": "参数: \n\n返回值类型: ",
      },
      // FieldValues
      {
        "prefix": "name",
        "body": [
          "name"
        ],
        "description": "字段名",
        "docs": "类型: readonly string",
      },
      {
        "prefix": "type",
        "body": [
          "type"
        ],
        "description": "类型",
        "docs": "类型: observable<string>",
      },
      {
        "prefix": "required",
        "body": [
          "required"
        ],
        "description": "是否必选",
        "docs": "类型: observable<boolean>",
      },
      {
        "prefix": "readOnly",
        "body": [
          "readOnly"
        ],
        "description": "是否只读",
        "docs": "类型: observable<boolean>",
      },
      {
        "prefix": "disabled",
        "body": [
          "disabled"
        ],
        "description": "是否禁用",
        "docs": "类型: observable<boolean>",
      },
      // FieldMethods
      {
        "prefix": "get",
        "body": [
          "get(${1:propsName})"
        ],
        "description": "根据属性名获取属性值",
        "docs": "参数: `propsName` - 属性名\n\n返回值类型: any",
      },
      {
        "prefix": "set",
        "body": [
          "set(${1:propsName}, ${2:value})"
        ],
        "description": "设置属性值",
        "docs": "参数: 	`propsName` - 属性名；`value` - 属性值\n\n返回值类型: -",
      },
      {
        "prefix": "reset",
        "body": [
          "reset()"
        ],
        "description": "重置设置的属性",
        "docs": "参数: \n\n返回值类型: -",
      },
      {
        "prefix": "checkValidity",
        "body": [
          "checkValidity()"
        ],
        "description": "校验字段值",
        "docs": "参数: \n\n返回值类型: boolean",
      },
      {
        "prefix": "setLovPara",
        "body": [
          "setLovPara(${1:para}, ${2:value})"
        ],
        "description": "设置 Lov 的查询参数",
        "docs": "参数: `para` - 参数名；`value` - 参数值\n\n返回值类型: ",
      },
      {
        "prefix": "getValue",
        "body": [
          "getValue()"
        ],
        "description": "获取当前记录的本字段值",
        "docs": "参数: `any`\n\n返回值类型: ",
      },
      {
        "prefix": "getText",
        "body": [
          "getText(${1:lookupValue})"
        ],
        "description": "根据 lookup 值获取 lookup 描述",
        "docs": "参数: `lookupValue` - lookup 值，默认本字段值\n\n返回值类型: string",
      },
      {
        "prefix": "getLookupData",
        "body": [
          "getLookupData(${1:lookupValue})"
        ],
        "description": "根据 lookup 值获取 lookup 数据对象",
        "docs": "参数: `lookupValue` - lookup 值，默认本字段值\n\n返回值类型: object",
      },
      {
        "prefix": "fetchLookup",
        "body": [
          "fetchLookup()"
        ],
        "description": "请求 lookup 数据，若有缓存直接返回缓存数据。",
        "docs": "参数: \n\n返回值类型: Promise<object[]>",
      },
      {
        "prefix": "isValid",
        "body": [
          "isValid()"
        ],
        "description": "是否校验通过",
        "docs": "参数: \n\n返回值类型: boolean",
      },
      {
        "prefix": "getValidationMessage",
        "body": [
          "getValidationMessage()"
        ],
        "description": "获取校验信息",
        "docs": "参数: \n\n返回值类型: string",
      },
    ],
}

module.exports = dsDocs;