# tab 选项卡

## 组件名

选项卡：`si-tab`

## 说明

选项卡通过一个传入Json来控制选项的渲染，通过监听选项切换事件，来实现相应的业务逻辑。选项支持删除功能，因此可以配合`<iframe>`实现传统管理系统的标签页功能。

下面是Json数据的例子：

```json
[
    { key: 'index', text: "首页" },
    { key: 'custManage', text: "客户管理", allowClose: true },
    { key: 'prodManage', text: "产品管理", allowClose: true },
    { key: 'goodManage', text: "商品管理", allowClose: true }
]
```

其中，`key`为必选项，且不可以相同，`allowClose`指定该选项是否可以关闭，建议至少保留一个不可以关闭的默认选项。

## 属性

### si-tab

| 属性     | 描述  | 类型   | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| items | 选项数据 | Array | - | yes |
| bgColor | 整体背景色，建议和选项背景色使用不同颜色加以区分 | String | none | no |
| itemBgColor | 选项背景色 | String | light-green-lighten-1 | no |
| fgColor | 前景色 | String | white | no |
| defaultActive | 默认激活的选项卡 | Number | 0 | no |

| 事件名        | 描述                                               |
| ------------- | -------------------------------------------------- |
| item-selected | 选项变化时的触发，在用户选择，或某选项卡关闭时触发 |
| item-deleted  | 选项被删除时触发，在选项卡关闭时触发               |

| 方法            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| switchItem(key) | 用代码方式切换到指定的选项卡                                 |
| pushItem(item)  | 动态添加一个选项，添加位置为卡组的最后，`item`参数和`items`属性数组元素格式相同 |
