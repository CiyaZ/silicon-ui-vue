<template>
  <div :class="computedClass" :style="computedStyle">
    <si-button @click="handleClick" :bgColor="bgColor">
      <si-icon iconName="up" :fontSize="25" :fgColor="fgColor" />
    </si-button>
  </div>
</template>
<script>
import { accelerateDecelerateInterpolator } from "../../utils/interpolate";

export default {
  name: "si-backtop",
  props: {
    autoHide: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: "green-lighten-3",
    },
    fgColor: {
      type: String,
      default: "white",
    },
    right: {
      type: Number,
      default: 30,
    },
    bottom: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      timer: null,
      offsetTop: 0,
    };
  },
  computed: {
    computedClass() {
      let classArr = [];
      classArr.push("backtop");
      if (this.autoHide) {
        if (this.offsetTop >= 10) {
          classArr.push("active");
        }
      } else {
        classArr.push("active");
      }
      return classArr;
    },
    computedStyle() {
      let styleObj = {};
      styleObj.right = this.right + "px";
      styleObj.bottom = this.bottom + "px";
      return styleObj;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onWindowScroll);
  },
  methods: {
    onWindowScroll() {
      this.offsetTop = window.document.documentElement.scrollTop;
    },
    handleClick() {
      const that = this;
      clearInterval(this.timer);
      const offsetTop = this.offsetTop;
      let scaledOffsetOrigin = 0;
      const scale = 1 / offsetTop;
      const step = 0.03;
      this.timer = setInterval(function () {
        if (scaledOffsetOrigin <= 1) {
          const offset = accelerateDecelerateInterpolator(scaledOffsetOrigin);
          window.document.documentElement.scrollTop =
            offsetTop - offset / scale;
          scaledOffsetOrigin += step;
        } else {
          window.document.documentElement.scrollTop = 0;
          clearInterval(that.timer);
        }
      }, 10);
    },
  },
};
</script>
<style scoped>
.backtop {
  position: fixed;
  opacity: 0;
  transition: all 0.3s;
}
.backtop.active {
  opacity: 1;
}
</style>