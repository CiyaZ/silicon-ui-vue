<template>
  <div
    :class="['toast', `si-bg-${this.bgColor}`, `si-fg-${this.fgColor}`, pos]"
  >
    {{ msg }}
  </div>
</template>
<script>
export default {
  name: "si-toast",
  props: {
    bgColor: {
      type: String,
      default: "black-lighten-3",
    },
    fgColor: {
      type: String,
      default: "white",
    },
    msg: {
      type: String,
      default: "",
    },
    pos: {
      type: String,
      default: "bottom",
      validator: function (value) {
        return ["top", "bottom"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  padding: 10px;
  color: var(--fg-color);
  background-color: var(--bg-color);
  z-index: 20;
}
.toast.top {
  top: 50px;
}
.toast.bottom {
  bottom: 20px;
}
</style>