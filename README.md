# c7n-dataset-plugin README

This is the README for your extension "c7n-dataset-plugin". After writing up a brief description, we recommend including the following sections.

## Features

一套针对 `DataSet` 特殊语法开发的语法补全插件，针对 DataSet 进行一系列的代码补全。

### JavaScript DataSet Snippets

| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `ds-import`                  | 导入 DataSet 方法                                                     |
| `ds-new`                     | 新建 DataSet                                                          |
| `ds-init`                    | 初始化一个 DataSet                                                     |
| `field-new`                  | 新建一个 field 字段                                                    |
| `queryField-new`             | 新建一个 queryField 字段                                               |

除这几个特殊指令外，其余的所有属性均与文档一致[Choerodon-ui DataSet](https://choerodon.github.io/choerodon-ui/components-pro/data-set-cn/#DataToJSON)


## Extension Settings

代码片段位于 `snippets/javascript.json` 下，需要提交 `pull-request` 的人员可以对该文件进行修改。

## Known Issues

暂无，欢迎在 issue 区进行补充

## Release Notes

发布日志

### 0.1.0

添加 `DataSet` 代码补全功能
