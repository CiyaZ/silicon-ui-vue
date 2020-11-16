<template>
  <div class="layer" v-if="isShowing">
    <div :class="['shadow', 'si-bg-' + shadowBgColor]"></div>
    <div :class="['popup', 'si-bg-' + bgColor, 'si-fg-' + fgColor]">
      <div class="header">
        <div class="title">{{ title }}</div>
        <div class="close" @click="hide">
          <si-icon iconName="close" :fontSize="16" :fgColor="fgColor" />
        </div>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "si-layer",
  props: {
    title: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: "light-green-lighten-3",
    },
    shadowBgColor: {
      type: String,
      default: "black-lighten-4",
    },
    fgColor: {
      type: String,
      default: "white",
    },
  },
  setup() {
    const isShowing = ref(false);
    return { isShowing };
  },
  methods: {
    show() {
      this.isShowing = true;
    },
    hide() {
      this.isShowing = false;
    },
  },
};
</script>
<style scoped>
.layer {
  position: relative;
}
.layer .shadow {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--bg-color);
  z-index: 40;
}
.layer .popup {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 41;
  background-color: var(--bg-color);
}
.layer .popup .header {
  height: 36px;
  border-bottom: 1px solid var(--border-color);
}
.layer .popup .header .title {
  float: left;
  padding: 10px 17px;
  color: var(--fg-color);
  font-size: 16px;
}
.layer .popup .header .close {
  float: right;
  padding: 10px 17px;
  cursor: pointer;
}
.layer .popup .body {
  min-width: 0;
}
</style>