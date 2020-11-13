<template>
  <ul :class="computedClass" :style="computedStyle">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: "si-context-menu",
  props: {
    bgColor: {
      type: String,
      default: "light-green-lighten-3",
    },
    defaultFgColor: {
      type: String,
      default: "black",
    },
    linkFgColor: {
      type: String,
      default: "light-blue",
    },
  },
  data() {
    return {
      children: [],
      isShowing: false,
      posX: 0,
      posY: 0,
      currentBgColor: "",
      currentDefaultFgColor: "",
      currentLinkFgColor: "",
    };
  },
  computed: {
    computedClass() {
      let classArr = [];
      classArr.push("si-context-menu");
      // 按钮颜色属性
      let colorBgCss = "si-bg-" + this.currentBgColor;
      let colorFgCss = "si-fg-" + this.currentDefaultFgColor;
      classArr.push(colorBgCss);
      classArr.push(colorFgCss);
      return classArr;
    },
    computedStyle() {
      let styleObj = {};
      if (this.isShowing) {
        styleObj.display = "block";
        styleObj.left = this.posX + "px";
        styleObj.top = this.posY + "px";
      } else {
        styleObj.display = "none";
      }
      return styleObj;
    },
  },
  mounted() {
    // 子组件挂载
    if (
      this.$parent.$options.name === "si-context-menu" ||
      this.$parent.$options.name === "si-menu-item"
    ) {
      this.$parent.__register(this);
      // 如果父组件也是菜单组，继承根节点颜色属性
      this.currentBgColor = this.contextMenuRoot.$props.bgColor;
      this.currentDefaultFgColor = this.contextMenuRoot.$props.defaultFgColor;
      this.currentLinkFgColor = this.contextMenuRoot.$props.linkFgColor;
    } else {
      // 自己就是根节点，使用props初始化
      this.currentBgColor = this.bgColor;
      this.currentDefaultFgColor = this.defaultFgColor;
      this.currentLinkFgColor = this.linkFgColor;
    }
  },
  inject: {
    contextMenuRoot: {
      default: null,
    },
  },
  provide() {
    if (
      this.$parent.$options.name !== "si-context-menu" &&
      this.$parent.$options.name !== "si-menu-item"
    ) {
      return {
        contextMenuRoot: this,
      };
    }
  },
  methods: {
    menuPopup(posX, posY) {
      this.isShowing = true;
      this.posX = posX;
      this.posY = posY;
    },
    menuHide() {
      this.isShowing = false;
      // 向下遍历树形结构隐藏所有子菜单
      function __callHideMethodRecursive(rootNode) {
        let childrenNodes = rootNode.children;
        for (let node of childrenNodes) {
          if (
            node.$options.name === "si-menu-item" &&
            node.type === "menu-set"
          ) {
            for (let node2 of node.children) {
              if (node2.$options.name === "si-context-menu") {
                node2.isShowing = false;
                __callHideMethodRecursive(node2);
                break;
              }
            }
          }
        }
      }
      __callHideMethodRecursive(this);
    },
    menuCheckAndHide(clickPosX, clickPosY) {
      // 从根组件遍历出菜单树的所有节点
      let contextMenuArr = [];
      function __addToContextMenuArrRecursive(rootNode) {
        contextMenuArr.push(rootNode);
        let childrenNodes = rootNode.children;
        for (let node of childrenNodes) {
          if (
            node.$options.name === "si-menu-item" &&
            node.type === "menu-set"
          ) {
            for (let node2 of node.children) {
              if (
                node2.$options.name === "si-context-menu" &&
                node2.isShowing === true
              ) {
                __addToContextMenuArrRecursive(node2);
                break;
              }
            }
          }
        }
      }
      __addToContextMenuArrRecursive(this);
      // 这里判断点击是否在所有si-context-menu之外，如果是就执行递归隐藏
      let check = true;
      for (let node of contextMenuArr) {
        let menuHeight = node.$el.offsetWidth;
        let menuWidth = node.$el.offsetHeight;
        if (
          clickPosX >= node.posX &&
          clickPosX <= node.posX + menuWidth &&
          clickPosY >= node.posY &&
          clickPosY <= node.posY + menuHeight
        ) {
          // 如果鼠标点击在某个si-context-menu组件之内，不会进行整个菜单隐藏，终止循环
          check = false;
          break;
        }
      }
      if (check) {
        this.menuHide();
      }
    },
    __register(ele) {
      this.children.push(ele);
    },
  },
};
</script>
<style scoped>
.si-context-menu {
  position: fixed;
  border-radius: 3px;
  background-color: var(--bg-color);
  box-shadow: 0 0 3px 1px var(--box-shadow-color);
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
