# progress 进度条

## 组件名

图标：`si-progress`

## 说明

进度条接收`max`和`value`两个参数，渲染当前指定的进度。出于浏览器兼容性考虑，该组件是用`<div>`模拟的，而不是HTML5的`<progress>`。

进度条组件实际宽度可以是自适应的，它读取了DOM元素的宽度，而且除了`value`改变时，也能够在页面`resize`时触发进度的重新计算。

## 属性

| 属性    | 描述                                    | 类型   | 默认值                | 是否必须 |
| ------- | --------------------------------------- | ------ | --------------------- | -------- |
| size    | 进度条大小样式，`normal`、`large`       | String | normal                | no       |
| value   | 字体大小，单位为`px`,默认`16px`即`1rem` | Number | 0                     | no       |
| max     | 调色板前景色，即字体颜色                | Number | 100                   | no       |
| bgColor | 进度槽（背景）颜色                      | String | light-green-lighten-3 | no       |
| fgColor | 进度条（前景）颜色                      | String | amber                 | no       |

