<template>
  <div
    class="carousel"
    ref="carousel"
    :style="{ height: carouselHeight + 'px' }"
  >
    <div class="item-container">
      <div
        class="item"
        v-for="(item, index) in renderItems"
        :ref="setItemRef"
        :key="index"
        :style="{ width: carouselWidth + 'px', height: carouselHeight + 'px' }"
      >
        <a :href="item.href" v-if="item.href">
          <img :src="item.image" />
        </a>
        <img :src="item.image" v-if="!item.href" />
      </div>
    </div>
    <div class="btn-left" ref="btnLeftRef" @click.prevent="triggerPre">
      <i class="si-icon si-icon-left"></i>
    </div>
    <div class="btn-right" ref="btnRightRef" @click.prevent="triggerPost">
      <i class="si-icon si-icon-right"></i>
    </div>
    <div class="btn-bottom"></div>
  </div>
</template>
<script>
import { ref, onBeforeUpdate, computed } from "vue";
import { accelerateDecelerateInterpolator } from "../../utils/interpolate";

export default {
  name: "si-carousel",
  props: {
    items: {
      type: Array,
      validator: function (value) {
        return value && value.length >= 1;
      },
    },
    aspectRatio: {
      type: Number,
      default: 0.618,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 7000,
    },
  },
  setup(props) {
    // 自适应计算的轮播框宽高
    const carouselWidth = ref(0);
    const carouselHeight = ref(0);

    // 当前轮播节点序号
    const currentItemIndex = ref(0);

    // 根据原始数据生成的用于渲染的数据
    const renderItems = computed(() => {
      let tmp = [];
      tmp.push(props.items[props.items.length - 1]);
      for (let i = 0; i < props.items.length - 1; i++) {
        tmp.push(props.items[i]);
      }
      // 仅1个数据，扩充为3个
      if (tmp.length === 1) {
        tmp.push(tmp[0]);
      }
      // 仅2个数据，扩充为4个
      if (tmp.length === 2) {
        tmp.push(tmp[0]);
        tmp.push(tmp[1]);
      }
      return tmp;
    });

    // 所有轮播节点数组
    let itemRefs = [];
    const setItemRef = (el) => {
      itemRefs.push(el);
    };
    onBeforeUpdate(() => {
      itemRefs = [];
    });

    // 轮播定时器
    const timer = ref(null);
    // 动画定时器
    const animTimer = ref(null);
    // 动画触发中状态
    const animating = ref(false);

    return {
      carouselWidth,
      carouselHeight,
      currentItemIndex,
      renderItems,
      itemRefs,
      setItemRef,
      timer,
      animTimer,
      animating,
    };
  },
  methods: {
    calcCarouselBound() {
      const carousel = this.$refs.carousel;
      this.carouselWidth = Math.floor(carousel.clientWidth);
      this.carouselHeight = Math.floor(carousel.clientWidth * this.aspectRatio);
    },
    layoutItems() {
      this.$nextTick(() => {
        for (let i = 0; i < this.itemRefs.length; i++) {
          const t = this.itemRefs[i];
          t.style.width = this.carouselWidth + "px";
          t.style.left = this.carouselWidth * (i - 1) + "px";
        }
        this.$refs.btnLeftRef.style.top = this.carouselHeight / 2 - 25 + "px";
        this.$refs.btnRightRef.style.top = this.carouselHeight / 2 - 25 + "px";
      });
    },
    triggerPre() {
      if (!this.animating) {
        this.animating = true;
        clearInterval(this.animTimer);
        let scaledOffsetOrigin = 0;
        const scale = 1 / this.carouselWidth;
        const step = 0.03;
        const originLeft = this.itemRefs.map((r) => {
          return r.offsetLeft;
        });
        this.animTimer = setInterval(() => {
          if (scaledOffsetOrigin <= 1) {
            const offset = accelerateDecelerateInterpolator(scaledOffsetOrigin);
            for (let i = 0; i < this.itemRefs.length; i++) {
              let r = this.itemRefs[i];
              r.style.left = originLeft[i] + offset / scale + "px";
            }
            scaledOffsetOrigin += step;
          } else {
            clearInterval(this.animTimer);
            // 计算截至位置
            for (let i = 0; i < this.itemRefs.length; i++) {
              let r = this.itemRefs[i];
              r.style.left = originLeft[i] + this.carouselWidth + "px";
            }
            // 更新当前序号
            this.currentItemIndex =
              this.currentItemIndex - 1 < 0
                ? this.items.length - 1
                : this.currentItemIndex - 1;
            // 将最后节点移到第一个前
            let head = this.itemRefs[0];
            let tail = this.itemRefs[0];
            let minLeft = this.itemRefs[0].offsetLeft;
            let maxLeft = this.itemRefs[0].offsetLeft;
            for (let r of this.itemRefs) {
              if (r.offsetLeft < minLeft) {
                minLeft = r.offsetLeft;
                head = r;
              }
              if (r.offsetLeft > maxLeft) {
                maxLeft = r.offsetLeft;
                tail = r;
              }
            }
            tail.style.left = head.offsetLeft - this.carouselWidth + "px";
            this.animating = false;
          }
        }, 10);
      }
    },
    triggerPost() {
      if (!this.animating) {
        this.animating = true;
        clearInterval(this.animTimer);
        let scaledOffsetOrigin = 0;
        const scale = 1 / this.carouselWidth;
        const step = 0.03;
        const originLeft = this.itemRefs.map((r) => {
          return r.offsetLeft;
        });
        this.animTimer = setInterval(() => {
          if (scaledOffsetOrigin <= 1) {
            const offset = accelerateDecelerateInterpolator(scaledOffsetOrigin);
            for (let i = 0; i < this.itemRefs.length; i++) {
              let r = this.itemRefs[i];
              r.style.left = originLeft[i] - offset / scale + "px";
            }
            scaledOffsetOrigin += step;
          } else {
            clearInterval(this.animTimer);
            // 计算截至位置
            for (let i = 0; i < this.itemRefs.length; i++) {
              let r = this.itemRefs[i];
              r.style.left = originLeft[i] - this.carouselWidth + "px";
            }
            // 更新当前序号
            this.currentItemIndex =
              this.currentItemIndex + 1 >= this.items.length
                ? 0
                : this.currentItemIndex + 1;
            console.log(this.currentItemIndex);
            // 将第一个节点移到最后
            let head = this.itemRefs[0];
            let tail = this.itemRefs[0];
            let minLeft = this.itemRefs[0].offsetLeft;
            let maxLeft = this.itemRefs[0].offsetLeft;
            for (let r of this.itemRefs) {
              if (r.offsetLeft < minLeft) {
                minLeft = r.offsetLeft;
                head = r;
              }
              if (r.offsetLeft > maxLeft) {
                maxLeft = r.offsetLeft;
                tail = r;
              }
            }
            head.style.left = tail.offsetLeft + this.carouselWidth + "px";
            this.animating = false;
          }
        }, 10);
      }
    },
  },
  mounted() {
    this.calcCarouselBound();
    this.layoutItems();

    this.$nextTick(() => {
      window.onresize = () => {
        this.calcCarouselBound();
        this.layoutItems();
      };
    });

    if (this.autoplay) {
      this.timer = setInterval(() => {
        this.triggerPost();
      }, this.interval);
    }
  },
};
</script>
<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}
.carousel .item-container .item {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.carousel .item-container .item img {
  width: 100%;
}
.carousel .btn-left {
  position: absolute;
  left: 10px;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  transition: all 0.3s;
}
.carousel:hover .btn-left {
  background-color: rgba(255, 255, 255, 0.3);
}
.carousel .btn-left:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.carousel .btn-left i {
  color: rgba(255, 255, 255, 0);
  font-size: 25px;
  position: relative;
  left: 12px;
  top: 12px;
}
.carousel:hover .btn-left i {
  color: rgba(255, 255, 255, 1);
}
.carousel .btn-right {
  position: absolute;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  transition: all 0.3s;
}
.carousel:hover .btn-right {
  background-color: rgba(255, 255, 255, 0.3);
}
.carousel .btn-right:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.carousel .btn-right i {
  color: rgba(255, 255, 255, 0);
  font-size: 25px;
  position: relative;
  left: 12px;
  top: 12px;
  transition: all 0.3s;
}
.carousel:hover .btn-right i {
  color: rgba(255, 255, 255, 1);
}
</style>
