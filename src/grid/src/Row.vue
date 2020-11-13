<template>
  <div class="row" :style="this.computedStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "si-row",
  props: {
    gap: {
      type: Number,
      default: 0,
    },
    hGap: {
      type: Number,
    },
    vGap: {
      type: Number,
    },
    direction: {
      type: String,
      default: "row",
    },
    align: {
      type: String,
      default: "top",
    },
    justify: {
      type: String,
      default: "start",
    },
  },
  computed: {
    resultHGap() {
      return this.hGap ? this.hGap : this.gap;
    },
    resultVGap() {
      return this.vGap ? this.vGap : this.gap;
    },
    computedStyle() {
      let styleObj = {};
      // Row间隔计算
      styleObj.margin = `-${this.resultVGap / 2}px -${this.resultHGap / 2}px`;
      // flex布局参数
      styleObj.flexDirection = this.direction;
      styleObj.justifyContent = this.justify;
      styleObj.alignItems = this.align;
      return styleObj;
    },
  },
  methods: {
    getResultHGap() {
      return this.resultHGap;
    },
    getResultVGap() {
      return this.resultVGap;
    },
  },
};
</script>
<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>