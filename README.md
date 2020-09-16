# c7n-dataset-plugin

针对 `choerodon-ui/pro DataSet` 定制的代码补全插件，其最终目标是省去你查阅文档的时间。

需要新增的功能，请在 `issue` 区予以提出与指正

## Install

[c7n-dataset-plugin](https://marketplace.visualstudio.com/items?itemName=handMS.c7n-dataset-plugin)

## Features

![screenshot](https://aboyl.gitee.io/vscode-dataset-extension/images/screenshot.gif)
![c7n-component-autoCompletion](https://aboyl.gitee.io/vscode-dataset-extension/images/c7n-component-autoCompletion.gif)
![内置文档](https://aboyl.gitee.io/vscode-dataset-extension/images/built-in-document.gif)
![悬浮提示](https://aboyl.gitee.io/vscode-dataset-extension/images/hover.gif)

一套针对 `DataSet` 特殊语法开发的语法补全插件，针对 DataSet 进行一系列的代码补全。

### JavaScript DataSet Snippets

#### DataSet相关
| Snippet                      | Purpose                                                             |
| ---------------------------- | --------------------------------------------------------------------|
| `importds`                   | 导入 DataSet 方法                                                    |
| `newds`                      | 新建 DataSet                                                        |
| `initds`                     | 初始化一个 DataSet                                                   |
| `newField`                   | 新建一个 field 字段                                                   |
| `newQuery`                   | 新建一个 queryField 字段                                              |
| `newAxiosConfig`             | 新建一个 AxiosConfig                                                 |

#### C7N组件相关
| Snippet                      | Purpose                                                             |
| ---------------------------- | --------------------------------------------------------------------|
| `Form`                       | 新建一个 Form                                                        |
| `Table`                      | 新建一个 Table                                                       |
| `Column`                     | 新建一个 Column                                                      |
| `Button`                     | 新建一个 Button                                                      |
| `Currency`                   | 新建一个 Currency                                                    |
| `TextField`                  | 新建一个 TextField                                                   |
| `IntlField`                  | 新建一个 IntlField                                                   |
| `Lov`                        | 新建一个 Lov                                                         |
| `NumberField`                | 新建一个 NumberField                                                 |
| `Password`                   | 新建一个 Password                                                    |
| `Range`                      | 新建一个 Range                                                       |
| `Radio`                      | 新建一个 Radio                                                       |
| `Transfer`                   | 新建一个 Transfer                                                    |
| `Switch`                     | 新建一个 Switch                                                      |
| `Select`                     | 新建一个 Select                                                      |
| `TextArea`                   | 新建一个 TextArea                                                    |
| `DatePicker`                 | 新建一个 DatePicker                                                  |
| `AutoComplete`               | 新建一个 AutoComplete                                                |
| `ColorPicker`                | 新建一个 ColorPicker                                                 |
| `CodeArea`                   | 新建一个 CodeArea                                                    |
| `CheckBox`                   | 新建一个 CheckBox                                                    |
| `Cascader`                   | 新建一个 Cascader                                                    |
| `EmailField`                 | 新建一个 EmailField                                                  |
| `IconPicker`                 | 新建一个 IconPicker                                                  |
| `SelectBox`                  | 新建一个 SelectBox                                                   |
| `Tree`                       | 新建一个 Tree                                                        |
| `Upload`                     | 新建一个 Upload                                                      |
| `Output`                     | 新建一个 Output                                                      |
| `Tooltip`                    | 新建一个 Tooltip                                                     |
| `Dropdown`                   | 新建一个 Dropdown                                                    |
| `Pagination`                 | 新建一个 Pagination                                                  |
| `Progress`                   | 新建一个 Progress                                                    |
| `Spin`                       | 新建一个 Spin                                                        |
| `Skeleton`                   | 新建一个 Skeleton                                                    |
| `Modal.open`                 | Modal.open方法                                                      |

所有属性均与文档一致[Choerodon-ui DataSet](https://choerodon.github.io/choerodon-ui/zh/procmp/dataset/dataset#datatojson)

### 内置文档
可以使用**c7n.search**命令快速查看文档,只支持Pro组件。有两种使用方式
1. 在命令面板输入**c7n.search**找到对应命令执行,选择自己需要查询文档的组件
2. 选择需要查询文档的组件,鼠标右击选择**c7n.search**命令进行查看

### 悬浮提示
将鼠标悬浮在c7n组件上,可以快速查看对应的API列表,只支持Pro组件

## Extension Settings

上述的代码片段位于 `snippets/javascript.json` 下

文档相关内容位于 `docs/DataSetDoc.js`，需要更新文档的话操作该文件即可

组件相关的代码片段位于 `snipptes/reactComponent.json` 下

需要提交 `pull-request` 的人员可以对以上文件进行修改。

## Known Issues

将 `snippet` 迁移至 `lsp`，使之具备跨 `ide` 的功能
语法补全并加入文档
