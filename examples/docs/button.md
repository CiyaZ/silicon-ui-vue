# button 按钮

## 组件名

按钮：`si-button`

按钮组：`si-button-group`

## 说明

按钮可以单独存在，也可以包含在按钮组中。

按钮组会自动处理子组件的间隔和左右样式，常用于分页按钮等场景。

## 属性

### si-button

| 属性     | 描述                                   | 类型    | 默认值          | 是否必须 |
| -------- | -------------------------------------- | ------- | --------------- | -------- |
| htmlType | 原始html按钮控件的type属性             | String  | button          | no       |
| disabled | 是否禁用，禁用的按钮不可响应事件       | Boolean | false           | no       |
| fgColor  | 调色板前景色                           | String  | white           | no       |
| bgColor  | 调色板背景色                           | String  | green-lighten-3 | no       |
| loading  | 是否显示加载中动画                     | Boolean | false           | no       |
| shape    | 形状，可选 `normal`，`round`，`circle` | String  | normal          | no       |
| size     | 大小，可选 `normal`，`small`，`large`  | String  | normal          | no       |

## 事件

### si-button

| 事件名 | 描述     |
| ------ | -------- |
| click  | 点击回调 |

