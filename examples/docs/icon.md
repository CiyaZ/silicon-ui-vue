# icon 图标

## 组件名

图标：`si-icon`

## 说明

图标组件会渲染为`<i>`标签，以`inline-block`形式渲染，采用字体图标实现。

图标字体使用的是LayUI的 [https://github.com/sentsin/layui](https://github.com/sentsin/layui)，包含的图标比较基础，可以结合Google material Design 图标，FontAwesome图标库等使用。

## 属性

### si-icon

| 属性     | 描述                                               | 类型   | 默认值 | 是否必须 |
| -------- | -------------------------------------------------- | ------ | ------ | -------- |
| iconName | 图标名，参考`iconfont.css`（不需要`si-icon-`前缀） | String | -      | yes      |
| fontSize | 字体大小，单位为`px`,默认`16px`即`1rem`            | Number | 16     | no       |
| fgColor  | 调色板前景色，即字体颜色                           | String | gray   | no       |
| anim     | 动画，参考`animation.css`（不需要`si-anim-`前缀）  | String | -      | no       |

