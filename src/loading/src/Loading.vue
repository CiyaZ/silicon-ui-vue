<template>
  <div class="loading">
    <slot></slot>
    <transition name="loading-fade">
      <div
        :class="[
          'shadow',
          'si-bg-' + bgColor,
          fullScreen ? 'full-screen' : undefined,
        ]"
        v-if="loading"
      >
        <div class="tip">
          <si-icon
            iconName="loading-1"
            anim="rotate"
            :fontSize="25"
            :fgColor="fgColor"
          />
          <div :class="['txt', 'si-fg-' + fgColor]">{{ text }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "si-loading",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "black-lighten-4",
    },
    fgColor: {
      type: String,
      default: "white",
    },
    text: {
      type: String,
      default: "加载中...",
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.loading {
  position: relative;
}
.loading .shadow {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--bg-color);
}
.loading .shadow.full-screen {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 40;
}
.loading .shadow .txt {
  color: var(--fg-color);
  margin-top: 10px;
}
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: all 0.3s ease;
}
.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
</style>