# backtop 返回顶部

## 组件名

返回顶部：`si-backtop`

## 说明

提供一个固定在页面右下角的按钮，默认位置为右下角`30px`处，也可以手动指定，点击可以让页面滚动条回到顶部。

## 属性

### si-backtop

| 属性     | 描述 | 类型    | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| autoHide | 是否在滚动条偏移为`0`时自动隐藏（隐藏阈值为`10px`） | Boolean | true | no |
| bgColor | 调色板背景色 | String | green-lighten-3 | no |
| fgColor | 调色板前景色 | String | white | no |
| right | `fixed`定位的右边距 | Number | 30 | no |
| bottom | `fixed`定位的下边距 | Number | 30 | no |

