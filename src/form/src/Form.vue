<template>
  <form :autocomplete="autocomplete">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: "si-form",
  props: {
    autocomplete: {
      type: String,
      default: "off",
      validator: function (value) {
        return ["on", "off"].indexOf(value) !== -1;
      },
    },
  },
};
</script>