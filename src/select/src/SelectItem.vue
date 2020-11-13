<template>
  <option :value="value" :key="value">
    {{ text }}
  </option>
</template>
<script>
export default {
  name: "si-select-item",
  props: {
    value: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>