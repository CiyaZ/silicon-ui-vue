# tag 标签

## 组件名

选项卡：`si-tag`

## 说明

标签组件能以普通文本或`<a>`链接两种形式渲染，普通文本模式可以触发点击事件。

## 属性

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| text | 展示文本 | String | - | yes |
| bgColor | 背景色 | String | green-lighten-3 | no |
| fgColor | 前景色 | String | white | no |
| border | 是否有边框（边框颜色和前景色一致，可以实现空心效果） | Boolean | false | no |
| href | 链接，设置该项自动以链接形式渲染，否则以普通文本形式渲染 | String | null | no |
