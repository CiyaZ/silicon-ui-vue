# context-menu 上下文菜单

## 组件名

上下文菜单：`si-context-menu`

菜单项：`si-menu-item`

## 说明

上下文菜单常用于弹出右键菜单、在某一组件上弹出下拉菜单等常见需求，这里需要用到`si-context-menu`和`si-menu-item`两个组件，代表菜单组和菜单选项，开发者可以自行任意组合树形菜单结构。

由于菜单的显示逻辑具体根据业务需求，可能是比较复杂的，根菜单组件的显示隐藏等没有默认行为，完全是由开发者调用菜单组件的方法进行控制，菜单弹出的位置也需要自行指定。比如想制作一个右键菜单，开发者需要传入单击位置的坐标到菜单根组件并调用相关方法，子菜单弹出和隐藏则根据树形结构自动进行控制，不需要手动干预。

该组件建议根据具体的业务需求进行手动封装后使用。

使用例子：

```html
<div class="myapp-container" @contextmenu.prevent="menuPopup" @click="menuCheckAndHide">
    <si-context-menu
    ref="menu"
    bgColor="light-green-lighten-3"
    defaultFgColor="black"
    linkFgColor="sky-blue"
    >
        <si-menu-item text="按钮菜单测试" @click="showMsg"></si-menu-item>
        <si-menu-item
            text="链接菜单测试"
            type="menu-link"
            href="https://ciyaz.com"
        ></si-menu-item>
        <si-menu-item text="子菜单弹出测试1" type="menu-set">
            <si-context-menu>
            <si-menu-item text="子菜单1-1"></si-menu-item>
            <si-menu-item text="子菜单1-2"></si-menu-item>
            <si-menu-item text="子菜单1-3" type="menu-set">
                <si-context-menu>
                <si-menu-item text="子菜单1-3-1"></si-menu-item>
                <si-menu-item text="子菜单1-3-2"></si-menu-item>
                <si-menu-item text="子菜单1-3-3" type="menu-set">
                    <si-context-menu>
                    <si-menu-item text="子菜单1-3-3-1"></si-menu-item>
                    <si-menu-item text="子菜单1-3-3-2"></si-menu-item>
                    </si-context-menu>
                </si-menu-item>
                </si-context-menu>
            </si-menu-item>
            </si-context-menu>
        </si-menu-item>
        <si-menu-item text="禁用菜单测试" :disabled="true"></si-menu-item>
        <si-menu-item text="子菜单弹出测试2" type="menu-set">
            <si-context-menu>
            <si-menu-item text="子菜单2-1"></si-menu-item>
            <si-menu-item text="子菜单2-2"></si-menu-item>
            <si-menu-item text="子菜单2-3" type="menu-set">
                <si-context-menu>
                <si-menu-item text="子菜单2-3-1"></si-menu-item>
                <si-menu-item text="子菜单2-3-2"></si-menu-item>
                </si-context-menu>
            </si-menu-item>
            </si-context-menu>
        </si-menu-item>
    </si-context-menu>
</div>
```

```javascript
methods: {
    menuPopup(ev) {
      this.$refs.menu.menuPopup(ev.clientX, ev.clientY);
    },
    menuCheckAndHide(ev) {
      let clickPosX = ev.clientX;
      let clickPosY = ev.clientY;
      this.$refs.menu.menuCheckAndHide(clickPosX, clickPosY);
    },
    showMsg() {
      alert("clicked");
    },
    // ...
}
```

上面代码实现了页面的右键菜单功能。

## 属性和方法

### si-context-menu

| 属性           | 描述         | 类型   | 默认值                | 是否必须 |
| -------------- | ------------ | ------ | --------------------- | -------- |
| bgColor        | 菜单背景色   | String | light-green-lighten-3 | no       |
| defaultFgColor | 默认前景色   | String | black                 | no       |
| linkFgColor    | 链接项前景色 | String | light-blue            | no       |

注：颜色属性只需要在菜单组根节点上指定一次即可，子菜单组和子菜单项都会继承根节点的颜色属性，不必在子菜单组上重复指定。

| 方法                                   | 描述                                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| menuPopup(posX, posY)                  | 在指定坐标弹出菜单组，该组件仅建议在根菜单组上调用，以免引起显示逻辑混乱                         |
| menuHide()                             | 隐藏该菜单组及其下的所有子菜单组                                                                 |
| menuCheckAndHide(clickPosX, clickPosY) | 检查指定坐标位置是否位于所有可见菜单组区域内，该组件仅建议在根菜单组上调用，以免引起显示逻辑混乱 |

### si-menu-item

| 属性     | 描述                                                                          | 类型    | 默认值      | 是否必须 |
| -------- | ----------------------------------------------------------------------------- | ------- | ----------- | -------- |
| text     | 菜单项显示的文字                                                              | String  | -           | yes      |
| type     | 菜单类型，可选：按钮菜单 `menu-button` 链接菜单 `menu-link` 子菜单 `menu-set` | String  | menu-button | no       |
| href     | 如果是链接菜单，用这个属性指定链接地址                                        | String  | 空字符串        | no       |
| disabled | 是否禁用                                                                      | Boolean | false       | no       |