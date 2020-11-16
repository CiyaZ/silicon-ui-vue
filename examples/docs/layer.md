# layer 弹出层

## 组件名

加载中遮罩：`si-layer`

## 说明

弹出层可以实现弹出警告框、表单对话框等功能，自定义内容以`<slot>`形式载入。

## 属性

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| title | 弹出层标题 | String | - | yes |
| bgColor | 背景色 | String | light-green-lighten-3 | no |
| shadowBgColor | 遮罩背景色 | String | black-lighten-4 | no |
| fgColor | 前景色 | String | white | no |

## 方法

| 方法   | 描述       |
| ------ | ---------- |
| show() | 显示弹出层 |
| hide() | 隐藏弹出层 |

