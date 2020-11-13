<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "si-button-group",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    registerItem(ele) {
      this.items.push(ele);
    },
  },
};
</script>
