<template>
  <i :class="computedClass" :style="computedStyle"></i>
</template>
<script>
export default {
  name: "si-icon",
  props: {
    iconName: {
      type: String,
      validator: function (value) {
        return !!value;
      },
    },
    fontSize: {
      type: Number,
      default: 16,
    },
    fgColor: {
      type: String,
      default: "gray",
    },
    anim: {
      type: String,
    },
  },
  computed: {
    computedClass() {
      let classArr = [];
      // 基础样式
      classArr.push("icon");
      // 图标CSS指定
      classArr.push("si-icon");
      classArr.push("si-icon-" + this.iconName);
      // 颜色
      classArr.push("si-fg-" + this.fgColor);
      // 动画
      if (this.anim) {
        classArr.push("si-anim-" + this.anim);
      }
      return classArr;
    },
    computedStyle() {
      let styleObj = {};
      // 字体大小
      styleObj.fontSize = this.fontSize + 'px';
      return styleObj;
    },
  },
};
</script>
<style scoped>
.icon {
  color: var(--fg-color);
}
</style>