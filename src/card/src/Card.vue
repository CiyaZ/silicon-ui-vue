<template>
  <div :class="computedClass" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "si-card",
  props: {
    bgColor: {
      type: String,
      default: "light-green-lighten-3",
    },
    shadow: {
      type: String,
      default: "never",
      validator: function (value) {
        return ["always", "hover", "never"].indexOf(value) !== -1;
      },
    },
    style: {
      type: Object,
    },
  },
  computed: {
    computedClass() {
      let classArr = [];
      classArr.push("card");
      if (this.shadow === "hover") {
        classArr.push("hoverable");
      } else if (this.shadow === "always") {
        classArr.push("always");
      }
      classArr.push("si-bg-" + this.bgColor);
      return classArr;
    },
  },
};
</script>
<style scoped>
.card {
  padding: 7px 15px;
  background-color: var(--bg-color);
  transition: all 0.3s;
}
.card.hoverable:hover {
  box-shadow: 0 0 3px 1px var(--box-shadow-color);
}
.card.always {
  box-shadow: 0 0 3px 1px var(--box-shadow-color);
}
</style>
