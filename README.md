# c7n-dataset-plugin

针对 `choerodon-ui/pro DataSet` 定制的代码补全插件，其最终目标是省去你查阅文档的时间。

需要新增的功能，请在 `issue` 区予以提出与指正

## Install

[c7n-dataset-plugin](https://marketplace.visualstudio.com/items?itemName=handMS.c7n-dataset-plugin)

## Features

![screenshot](https://raw.githubusercontent.com/Xeonice/vscode-dataset-extension/master/images/screenshot.gif)

一套针对 `DataSet` 特殊语法开发的语法补全插件，针对 DataSet 进行一系列的代码补全。

### JavaScript DataSet Snippets

| Snippet                      | Purpose                                                             |
| ---------------------------- | --------------------------------------------------------------------|
| `importds`                   | 导入 DataSet 方法                                                    |
| `newds`                      | 新建 DataSet                                                        |
| `initds`                     | 初始化一个 DataSet                                                   |
| `newField`                   | 新建一个 field 字段                                                   |
| `newQuery`                   | 新建一个 queryField 字段                                              |
| `newAxiosConfig`             | 新建一个 AxiosConfig                                                 |
| `newForm`                    | 新建一个 Form                                                        |
| `newTable`                   | 新建一个 Table                                                       |

所有属性均与文档一致[Choerodon-ui DataSet](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn/#DataToJSON)

## Extension Settings

上述的代码片段位于 `snippets/javascript.json` 下

文档相关内容位于 `docs/DataSetDoc.js`，需要更新文档的话操作该文件即可

组件相关的代码片段位于 `snipptes/reactComponent.json` 下

需要提交 `pull-request` 的人员可以对以上文件进行修改。

## Known Issues

将 `snippet` 迁移至 `lsp`，使之具备跨 `ide` 的功能
语法补全并加入文档
