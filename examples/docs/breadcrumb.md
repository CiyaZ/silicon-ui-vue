# breadcrumb 面包屑

## 组件名

面包屑：`si-breadcrumb`

## 说明

面包屑常用于多级路径的导航展示，这里面包屑组件接收一个JSON数组参数`items`，根据该参数渲染组件。参数格式例子如下：

```json
[
    { text: "首页", href: "http://www.google.com" },
    { text: "新闻", href: "http://www.google.com" },
    { text: "热点资讯", href: "http://www.google.com" },
    { text: "沸腾" },
]
```

## 属性

### si-breadcrumb

| 属性     | 描述 | 类型    | 默认值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| items | 面包屑数据 | Array | - | yes |
| separator | 分隔符，例如空格、`/`、`>`等 | String | 空格 | no |
| defaultFgColor | 默认颜色，包括分隔符和普通文本 | String | gray | no |
| activeFgColor | 链接颜色 | String | light-blue | no |

