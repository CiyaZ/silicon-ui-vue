# input 输入组件

## 组件名

图标：`si-input`

## 说明

对应原生HTML的`<input>`控件，在此基础上实现布局、错误回显等功能。输入值也可以使用`v-model`来绑定。

## 属性

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| initialValue | 初始值 | String | - | no |
| htmlType | 可选值为`text`、`password` | String | text | no |
| placeholder | 占位符 | String | - | no |
| autocomplete | 是否屏蔽浏览器的自动完成功能，可选`off`、`on` | String | off | no |
| label | 表单项标签值 | String | - | no |
| labelFgColor | 标签文字颜色 | String | gray | no |
| labelWidth | 标签长度 | Number | 120 | no |
| fgColor | 输入框文字颜色 | String | black | no |
| bgColor | 输入框背景色 | String | white-lighten-3 | no |
| layout | 输入框布局，可选`inline`、`block` | String | inline | no |
| errMsg | 错误信息 | String | - | no |

## 事件

| 事件名 | 描述             |
| ------ | ---------------- |
| click  | 点击时触发       |
| enter  | 按下回车键时触发 |
| focus  | 获得焦点时触发   |
| blur   | 失去焦点时触发   |
| change | 内容改变时触发   |

## 方法

| 方法       | 描述        |
| ---------- | ----------- |
| val(value) | 获取/设置值 |