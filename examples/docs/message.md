# message 消息组件

## 组件名

消息组件：`si-message`

## 说明

消息组件支持生成3种消息：

1. 类似Android的Toast消息
2. 带有标题、内容和关闭按钮的消息
3. HTML5的系统消息

## 属性和方法

| 属性          | 描述                      | 类型   | 默认值          | 是否必须 |
| ------------- | ------------------------- | ------ | --------------- | -------- |
| toastDelay    | 吐司的关闭延迟            | Number | 5               | no       |
| toastPosition | 吐司位置，`top`、`bottom` | String | bottom          | no       |
| toastBgColor  | 吐司背景色                | String | black-lighten-3 | no       |
| toastFgColor  | 吐司前景色                | String | white           | no       |
| notifyDelay   | 通知关闭延迟              | Number | 5               | no       |
| notifyBgColor | 通知背景色                | String | white-lighten-1 | no       |
| notifyFgColor | 通知前景色                | String | gray            | no       |

| 方法                                            | 描述                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| showToast(msg)                                  | 显示一个吐司                                                 |
| pushNotify({ title, msg })                      | 显示一个消息，`title`标题，`msg`消息内容                     |
| showSystemNotify({ icon, title, msg, onclick }) | 显示一个系统消息，`icon`图标，`title`标题，`msg`消息内容，`onclick`点击回调 |

