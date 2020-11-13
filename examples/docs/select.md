# select 选择组件

## 组件名

选择组件：`si-select`

选项子组件：`si-select-item`

## 说明

选择组件可以传入一个`options`内容数组参数，也可以使用插槽方式放入`si-select-item`子组件，相关组件会渲染为`<select>`和`<option>`标签。

表单组件是当前值可以用`v-model`绑定，或通过`val()`方法获取，或在处理事件时接收参数。

传入JSON格式数据例子：
```json
[
    { value: 'a', text: '中国' },
    { value: 'b', text: '美国' },
    { value: 'c', text: '其它' },
]
```

其中，`text`为显示的文字，`value`为具体值。

## 属性

### si-select

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| options | 选项内容数组 | Array | - | yes |
| initialValue | 初始值 | String | - | no |
| label | 表单项标签值 | String | - | no |
| labelFgColor | 标签文字颜色 | String | gray | no |
| labelWidth | 标签长度 | Number | 120 | no |
| fgColor | 输入框文字颜色 | String | black | no |
| bgColor | 输入框背景色 | String | white-lighten-3 | no |
| layout | 输入框布局，可选`inline`、`block` | String | inline | no |
| errMsg | 错误信息 | String | - | no |

### si-select-item

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| value | 选项值 | String | - | yes |
| text | 选项显示文本 | String | - | yes |

## 事件

### si-select

| 事件名 | 描述           |
| ------ | -------------- |
| focus  | 获得焦点时触发 |
| blur   | 失去焦点时触发 |
| change | 内容改变时触发 |

## 方法

### si-select

| 方法       | 描述        |
| ---------- | ----------- |
| val(value) | 获取/设置值 |
