<template>
  <div>
    <span v-for="(item, index) in items" :key="index">
      <a
        :class="[...computedActiveColorClass, 'bread-link-active']"
        v-if="item.href !== undefined && item.href !== null"
        :href="item.href"
        >{{ item.text }}</a
      >
      <span
        :class="[...computedDefaultColorClass, 'bread-link']"
        v-if="item.href === undefined || item.href === null || item.href === ''"
        >{{ item.text }}</span
      >
      <span
        :class="[...computedDefaultColorClass, 'bread-separator']"
        v-if="index < items.length - 1"
        >{{ separator }}</span
      >
    </span>
  </div>
</template>
<script>
export default {
  name: "si-breadcrumb",
  props: {
    items: {
      type: Array,
      validator: function (value) {
        return value && value.length >= 1;
      },
    },
    separator: {
      type: String,
      default: " ",
    },
    defaultFgColor: {
      type: String,
      default: "gray",
    },
    activeFgColor: {
      type: String,
      default: "light-blue",
    },
  },
  computed: {
    computedDefaultColorClass() {
      let classArr = [];
      classArr.push("si-fg-" + this.defaultFgColor);
      return classArr;
    },
    computedActiveColorClass() {
      let classArr = [];
      classArr.push("si-fg-" + this.activeFgColor);
      return classArr;
    },
  },
};
</script>
<style scoped>
.bread-link-active {
  color: var(--fg-color);
  text-decoration: none;
  transition: all 0.3s;
}
.bread-link-active:hover {
  color: var(--fg-hover-color);
}
.bread-link-active:active {
  color: var(--fg-active-color);
}
.bread-link {
  color: var(--fg-color);
}
.bread-separator {
  color: var(--fg-color);
}
</style>
