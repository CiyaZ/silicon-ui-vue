<template>
  <div :class="this.fluid ? 'container-fluid' : 'container'" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "si-container",
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    style: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
}
.container-fluid {
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
}
@media screen and (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media screen and (min-width: 1280px) {
  .container {
    width: 1250px;
  }
}
</style>