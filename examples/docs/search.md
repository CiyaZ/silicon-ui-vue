# search 搜索框

## 组件名

图标：`si-search`

## 说明

搜索框由一个输入框和按钮组合而成，支持两种大小模式。

## 属性

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| size | 大小，可选`normal`、`large` | String | normal | no       |
| btnBgColor | 按钮背景色 | String | green-lighten-3 | no |
| btnFgColor | 按钮前景色 | String | white | no |
| btnText | 按钮文字 | String | 搜索 | no |
| inputBgColor | 输入框背景色 | String | white | no |
| inputFgColor | 输入框前景色 | String | black | no |
| placeholder | 输入框占位符 | String | - | no |

## 事件

| 事件名 | 描述             |
| ------ | ---------------- |
| search  | 点击搜索按钮或回车时触发 |
| change | 内容改变时触发   |

## 方法

| 方法       | 描述        |
| ---------- | ----------- |
| val(value) | 获取/设置值 |
