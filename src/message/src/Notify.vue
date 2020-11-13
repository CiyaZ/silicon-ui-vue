<template>
  <div :class="['notify', `si-bg-${this.bgColor}`]">
    <div :class="['title', `si-fg-${this.fgColor}`]">{{ this.title }}</div>
    <div :class="['msg', `si-fg-${this.fgColor}`]">{{ this.msg }}</div>
    <div class="close" @click.prevent.stop="this.__handleClose">
      <si-icon iconName="close" :fgColor="this.fgColor" />
    </div>
  </div>
</template>
<script>
export default {
  name: "si-notify",
  props: {
    bgColor: {
      type: String,
      default: "white-lighten-1",
    },
    fgColor: {
      type: String,
      default: "gray",
    },
    title: {
      type: String,
      default: "",
    },
    msg: {
      type: String,
      default: "",
    },
  },
  emits: ["notify-close"],
  methods: {
    __handleClose() {
      this.$emit("notify-close");
    },
  },
};
</script>
<style scoped>
.notify {
  position: relative;
  width: 200px;
  background-color: var(--bg-color);
  box-shadow: 0 0 3px 1px var(--box-shadow-color);
  padding: 10px;
  margin: 5px 0;
}
.notify .title {
  font-weight: bold;
  color: var(--fg-color);
}
.notify .msg {
  margin-top: 10px;
  color: var(--fg-color);
}
.notify .close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>