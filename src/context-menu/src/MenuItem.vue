<template>
  <div>
    <li
      :class="computedClass"
      v-if="type == 'menu-button'"
      @click="closeContextMenu"
    >
      {{ text }}
    </li>
    <li
      :class="computedClass"
      v-if="type == 'menu-link'"
      @click="closeContextMenu"
    >
      <a :href="activedHref" class="link">{{ text }}</a>
    </li>
    <li :class="computedClass" v-if="type === 'menu-set'" @click="subMenuPopup">
      <div style="overflow: hidden">
        <span style="float: left">{{ text }}</span>
        <span style="float: right">
          &nbsp;&nbsp;&nbsp;
          <si-icon iconName="right" :fontSize="16" :fgColor="currentDefaultFgColor" />
        </span>
      </div>
    </li>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "si-menu-item",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "menu-button",
      validator: function (value) {
        return ["menu-button", "menu-link", "menu-set"].indexOf(value) !== -1;
      },
    },
    href: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      children: [],
      currentBgColor: "",
      currentDefaultFgColor: "",
      currentLinkFgColor: "",
    };
  },
  computed: {
    activedHref() {
      if (this.disabled) {
        return "";
      } else {
        return this.href;
      }
    },
    computedClass() {
      let classArr = [];
      classArr.push("si-menu-item");
      if (this.disabled) {
        classArr.push("disabled");
      } else {
        classArr.push("si-bg-" + this.currentBgColor);
        if (this.type === "menu-link") {
          classArr.push("si-fg-" + this.currentLinkFgColor);
        } else {
          classArr.push("si-fg-" + this.currentDefaultFgColor);
        }
      }
      return classArr;
    },
  },
  inject: ["contextMenuRoot"],
  mounted() {
    // 子组件挂载
    if (
      this.$parent.$options.name === "si-context-menu" ||
      this.$parent.$options.name === "si-menu-item"
    ) {
      this.$parent.__register(this);
      this.currentBgColor = this.contextMenuRoot.$props.bgColor;
      this.currentDefaultFgColor = this.contextMenuRoot.$props.defaultFgColor;
      this.currentLinkFgColor = this.contextMenuRoot.$props.linkFgColor;
    }
  },
  methods: {
    closeContextMenu() {
      if (!this.disabled) {
        // 向上遍历调用根菜单组件的menuHide()方法
        let p = this.$parent;
        let contextMenuRoot = null;
        for (;;) {
          if (p === null || p === undefined) {
            break;
          }
          if (p.$options.name === "si-context-menu") {
            contextMenuRoot = p;
          }
          p = p.$parent;
        }
        contextMenuRoot.menuHide();
      }
    },
    subMenuPopup(ev) {
      if (!this.disabled) {
        // 同级菜单递归回收
        for (let siblingNode of this.$parent.children) {
          if (
            siblingNode !== this &&
            siblingNode.type === "menu-set" &&
            siblingNode.children.length === 1
          ) {
            siblingNode.children[0].menuHide();
          }
        }
        // 子菜单弹出
        let subMenu = this.children[0];
        if (subMenu !== null && subMenu !== undefined) {
          let menuPosX = this.$parent.posX + this.$parent.$el.offsetWidth;
          let menuPosY = ev.clientY;
          subMenu.menuPopup(menuPosX, menuPosY);
          ev.stopPropagation();
        }
      }
    },
    __register(ele) {
      this.children.push(ele);
    },
  },
};
</script>
<style scoped>
.si-menu-item {
  cursor: pointer;
  padding: 7px 16px 7px 16px;
  color: var(--fg-color);
  transition: all 0.3s;
}
.si-menu-item:hover {
  opacity: 0.95;
  background-color: var(--bg-hover-color);
}
.si-menu-item:active {
  background-color: var(--bg-active-color);
}
.si-menu-item .link {
  display: block;
  color: var(--fg-color);
  text-decoration: none;
}
.si-menu-item.disabled {
  cursor: not-allowed;
  color: rgba(128, 128, 128, 0.95);
}
</style>
