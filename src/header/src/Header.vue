<template>
  <div :class="computedClass" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "si-header",
  props: {
    fixed: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: "light-green-lighten-3",
    },
    style: {
      type: Object,
    },
  },
  computed: {
    computedClass() {
      let classArr = [];
      classArr.push("header");
      classArr.push("si-bg-" + this.bgColor);
      if (this.fixed) {
        classArr.push("fixed");
      }
      return classArr;
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 45px;
  box-shadow: 0 0 3px 1px var(--box-shadow-color);
  background-color: var(--bg-color);
}
.header.fixed {
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>