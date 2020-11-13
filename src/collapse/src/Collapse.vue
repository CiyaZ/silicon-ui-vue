<template>
  <div :class="['collapse', 'si-bg-' + this.bgColor]">
    <div class="collapse-head" @click.prevent.stop="this.handleCollapse">
      <span :class="['collapse-title', 'si-fg-' + this.fgColor]">{{
        title
      }}</span>
      <span class="collapse-icon">
        <si-icon :iconName="collapsed ? 'down' : 'up'" :fgColor="fgColor" />
      </span>
    </div>
    <div v-if="!this.collapsed" class="collapse-hr"></div>
    <div v-if="!this.collapsed" :class="['collapse-body', 'si-fg-' + this.fgColor]">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "si-collapse",
  props: {
    title: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: "light-green-lighten-3",
    },
    fgColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style scoped>
.collapse {
  background-color: var(--bg-color);
}
.collapse .collapse-head {
  width: 100%;
  overflow: hidden;
  font-weight: bold;
  padding: 10px 17px;
  cursor: pointer;
}
.collapse .collapse-head .collapse-title {
  float: left;
  color: var(--fg-color);
}
.collapse .collapse-head .collapse-icon {
  float: right;
}
.collapse .collapse-hr {
  height: 1px;
  background-color: rgba(220, 220, 220, 0.45);
}
.collapse .collapse-body {
  overflow: hidden;
  padding: 5px 17px;
  color: var(--fg-color);
}
</style>