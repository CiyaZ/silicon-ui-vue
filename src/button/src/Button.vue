<template>
  <button
    :disabled="disabled"
    :class="computedClass"
    :type="htmlType"
    @click.stop.prevent="this.handleClick"
  >
    <i
      v-if="loading"
      :class="[
        'si-icon',
        'si-icon-loading-1',
        'si-anim-rotate',
        'loading',
        'si-fg-' + this.fgColor,
      ]"
    ></i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "si-button",
  props: {
    htmlType: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fgColor: {
      type: String,
      default: "white",
    },
    bgColor: {
      type: String,
      default: "green-lighten-3",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["normal", "round", "circle"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["normal", "small", "large"].indexOf(value) !== -1;
      },
    },
  },
  emits: ["click"],
  computed: {
    computedClass() {
      let classArr = [];
      // 基础样式
      classArr.push("btn");
      // 禁用按钮不加载hover和active特效
      if (this.disabled) {
        classArr.push("btn-disabled");
      }
      // 按钮形状属性
      let shapeCss = "btn-shape-" + this.shape;
      classArr.push(shapeCss);
      // 按钮大小属性
      let sizeCss = "btn-size-" + this.size;
      classArr.push(sizeCss);
      // 按钮颜色属性
      if (this.fgColor) {
        classArr.push("si-fg-" + this.fgColor);
      }
      if (this.bgColor) {
        classArr.push("si-bg-" + this.bgColor);
      }
      // 位于按钮组的按钮处理
      const p = this.$parent;
      if (p && p.$options.name === "si-button-group") {
        const items = p.items;
        if (items.length > 1) {
          for (let i = 0; i < items.length; i++) {
            if (items[i] === this) {
              if (i === 0) {
                classArr.push("group-at-left");
              } else if (i === items.length - 1) {
                classArr.push("group-at-right");
              } else {
                classArr.push("group-at-mid");
              }
              break;
            }
          }
        }
      }
      return classArr;
    },
  },
  mounted() {
    const p = this.$parent;
    if (p && p.$options.name === "si-button-group") {
      this.$parent.registerItem(this);
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
<style>
.btn {
  cursor: pointer;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: none;
  color: var(--fg-color);
  background-color: var(--bg-color);
  transition: all 0.3s;
}
.btn:hover {
  background-color: var(--bg-hover-color);
}
.btn:active {
  background-color: var(--bg-active-color);
}
.btn.btn-disabled {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 1);
  background-color: rgba(203, 203, 203, 0.85);
}
.btn.btn-size-small {
  padding: 2px 8px;
}
.btn.btn-size-normal {
  padding: 6px 14px;
}
.btn.btn-size-large {
  padding: 10px 17px;
}
.btn.btn-shape-round {
  border-radius: 3px;
}
.btn.btn-shape-circle {
  border-radius: 100px;
}
.btn.btn-shape-normal {
  border-radius: 0;
}
.btn.group-at-left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: 8px;
}
.btn.group-at-mid {
  border-radius: 0;
  margin-right: 8px;
}
.btn.group-at-right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn .loading {
  margin-right: 8px;
  color: var(--fg-color);
}
</style>
