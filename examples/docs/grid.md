# grid 栅格

## 组件名

栅格行：`si-row`

栅格列：`si-col`

## 说明

响应式栅格系统可以参考`BootStrap`，这里使用`flex`布局实现，参考`Ant Design`使用`24`栅格，控制更为精细。

栅格组件可以看作是封装好的简易`flex`布局，暴露了有限的布局参数，并设置了大部分默认值，同时使用媒体查询实现了响应式栅格。但如果有更高的布局要求，建议自行实现。

关于栅格列组件，`span`属性必须设置，值为`1-24`的整数，响应式参数如`xs`、`md`等会在合适的屏幕尺寸下覆盖基础的`span`属性，且更大尺寸的参数会覆盖更小尺寸的参数。`offset`同理，不同是的`offset`为`0`时，不会出现偏移的占位。

## 属性

### si-row

| 属性     | 描述   | 类型    | 默认值  | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| gap | 栅格单元间距，单位为`px` | Number | 0 | no |
| hGap | 横向间距，可覆盖`gap` | Number | - | no |
| vGap | 纵向间距，可覆盖`gap` | Number | - | no |
| direction | flex布局轴向 | String | row | no |
| align | flex布局轴向对齐方式 | String | top | no |
| justify | flex布局轴纵向对齐方式 | String | start | no |

### si-col

| 属性     | 描述   | 类型    | 默认值  | 是否必须 |
| ---- | ---- | ---- | ---- | ---- |
| offset | 左侧偏移的栅格单元数 | Number | 0 | no |
| offsetXs | 左侧偏移的栅格单元数 `<576px` | Number | - | no |
| offsetSm | 左侧偏移的栅格单元数`>=576px` | Number | - | no |
| offsetMd | 左侧偏移的栅格单元数`>=768px` | Number | - | no |
| offsetLg | 左侧偏移的栅格单元数`>=992px` | Number | - | no |
| offsetXl | 左侧偏移的栅格单元数`>=1200px` | Number | - | no |
| offsetXxl | 左侧偏移的栅格单元数`>=1600px` | Number | - | no |
| span | 栅格单元数 | Number | - | yes |
| xs | 栅格单元数`<576px` | Number | - | no |
| sm |栅格单元数`>=576px` | Number | - | no |
| md |栅格单元数`>=768px` | Number | - | no |
| lg | 栅格单元数`>=992px` | Number | - | no |
| xl | 栅格单元数`>=1200px` | Number | - | no |
| xxl | 栅格单元数`>=1600px` | Number | - | no |

