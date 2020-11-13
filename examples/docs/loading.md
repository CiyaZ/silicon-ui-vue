# loading 加载中遮罩

## 组件名

加载中遮罩：`si-loading`

## 说明

加载中遮罩组件可以作为容器，嵌入页面的任意位置，比如嵌入一个内容区块，那么就可以在该内容区块上生成遮罩。此外，也支持全屏加载遮罩模式，全屏模式下应将组件套在内容区块的最外层，遮罩将相对屏幕固定，且大小为`width: 100%; height: 100vh;`。

遮罩中，除了加载中的旋转图标，颜色和文本是可以自定义的，默认为半透明黑色遮罩，白色文字。

## 属性

### si-loading

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| loading | 是否显示加载中遮罩 | Boolean | false | no |
| bgColor | 背景色 | String | black-lighten-4 | no |
| fgColor | 前景色 | String | white | no |
| text | 显示的文字 | String | 加载中... | no |
| fullScreen | 是否为全屏模式 | Boolean | false | no |
