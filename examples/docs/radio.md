# radio 单选组件

## 组件名

单选组件：`si-radio`

## 说明

选择组件可以传入一个`items`内容数组参数，相关组件会渲染为`<input type="radio" />`标签。

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

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| items | 选项内容数组 | Array | - | yes |
| initialValue | 初始值 | String | - | no |
| label | 表单项标签值 | String | - | no |
| labelFgColor | 标签文字颜色 | String | gray | no |
| labelWidth | 标签长度 | Number | 120 | no |
| fgColor | 单选组文字颜色 | String | black | no |
| layout | 输入框布局，可选`inline`、`block` | String | inline | no |
| errMsg | 错误信息 | String | - | no |

## 事件

| 事件名 | 描述           |
| ------ | -------------- |
| change | 内容改变时触发 |

## 方法

| 方法       | 描述        |
| ---------- | ----------- |
| val(value) | 获取/设置值 |
