<template>
  <div
    ref="bar"
    :class="[
      'progress',
      'si-bg-' + bgColor,
      size === 'large' ? 'progress-large' : undefined,
    ]"
  >
    <div
      :class="['progress-value', 'si-bg-' + fgColor]"
      :style="styleWidth"
    ></div>
  </div>
</template>
<script>
export default {
  name: "si-progress",
  props: {
    size: {
      type: String,
      validator: function (value) {
        return ["normal", "large"].indexOf(value) !== -1;
      },
    },
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    bgColor: {
      type: String,
      default: "light-green-lighten-3",
    },
    fgColor: {
      type: String,
      default: "amber",
    },
  },
  watch: {
    value: function (value) {
      this.calcValueWidth(value);
    },
  },
  data() {
    return {
      styleWidth: { width: "0px" },
    };
  },
  mounted() {
    this.calcValueWidth(this.value);
    window.onresize = () => {
      this.calcValueWidth(this.value);
    };
  },
  methods: {
    calcValueWidth(value) {
      let result = 0;
      if (this.$refs.bar) {
        const maxWidth = this.$refs.bar.clientWidth;
        result = maxWidth * (value / this.max);
      }
      this.styleWidth.width = Math.floor(result) + "px";
    },
  },
};
</script>
<style scoped>
.progress {
  position: relative;
  height: 5px;
  width: 100%;
  background-color: var(--bg-color);
}
.progress.progress-large {
  height: 30px;
}
.progress .progress-value {
  position: absolute;
  left: 0;
  top: 0;
  height: 5px;
  width: 0;
  background-color: var(--bg-color);
  transition: all 0.3s;
}
.progress .progress-value:hover {
  background-color: var(--bg-hover-color);
}
.progress.progress-large .progress-value {
  height: 30px;
}
</style>