<template>
  <div :class="offsetComputedClass" :style="this.gapComputedStyle"></div>
  <div :class="colComputedClass" :style="this.gapComputedStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "si-col",
  props: {
    offset: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0 && value <= 24;
      },
    },
    offsetXs: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value >= 0 && value <= 24;
        }
        return true;
      },
    },
    offsetSm: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value >= 0 && value <= 24;
        }
        return true;
      },
    },
    offsetMd: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value >= 0 && value <= 24;
        }
        return true;
      },
    },
    offsetLg: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value >= 0 && value <= 24;
        }
        return true;
      },
    },
    offsetXl: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value >= 0 && value <= 24;
        }
        return true;
      },
    },
    offsetXxl: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value >= 0 && value <= 24;
        }
        return true;
      },
    },
    span: {
      type: Number,
      validator: function (value) {
        return value && value > 0 && value <= 24;
      },
    },
    xs: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value > 0 && value <= 24;
        }
        return true;
      },
    },
    sm: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value > 0 && value <= 24;
        }
        return true;
      },
    },
    md: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value > 0 && value <= 24;
        }
        return true;
      },
    },
    lg: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value > 0 && value <= 24;
        }
        return true;
      },
    },
    xl: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value > 0 && value <= 24;
        }
        return true;
      },
    },
    xxl: {
      type: Number,
      validator: function (value) {
        if (value) {
          return value > 0 && value <= 24;
        }
        return true;
      },
    },
  },
  computed: {
    offsetComputedClass() {
      let classArr = [];
      classArr.push("offset");
      if (this.offset) {
        classArr.push("col-" + this.offset);
      }
      if (this.offsetXs) {
        classArr.push("col-xs-" + this.offsetXs);
      }
      if (this.offsetSm) {
        classArr.push("col-sm-" + this.offsetSm);
      }
      if (this.offsetMd) {
        classArr.push("col-md-" + this.offsetMd);
      }
      if (this.offsetLg) {
        classArr.push("col-lg-" + this.offsetLg);
      }
      if (this.offsetXl) {
        classArr.push("col-xl-" + this.offsetXl);
      }
      if (this.offsetXxl) {
        classArr.push("col-xxl-" + this.offsetXxl);
      }
      return classArr;
    },
    colComputedClass() {
      let classArr = [];
      classArr.push("col-" + this.span);
      if (this.xs) {
        classArr.push("col-xs-" + this.xs);
      }
      if (this.sm) {
        classArr.push("col-sm-" + this.sm);
      }
      if (this.md) {
        classArr.push("col-md-" + this.md);
      }
      if (this.lg) {
        classArr.push("col-lg-" + this.lg);
      }
      if (this.xl) {
        classArr.push("col-xl-" + this.xl);
      }
      if (this.xxl) {
        classArr.push("col-xxl-" + this.xxl);
      }
      return classArr;
    },
    gapComputedStyle() {
      let styleObj = {};
      let parentHGap = this.$parent.getResultHGap();
      let parentVGap = this.$parent.getResultVGap();
      if (parentHGap) {
        styleObj.paddingLeft = `${parentHGap / 2}px`;
        styleObj.paddingRight = `${parentHGap / 2}px`;
      }
      if (parentVGap) {
        styleObj.paddingTop = `${parentVGap / 2}px`;
        styleObj.paddingBottom = `${parentVGap / 2}px`;
      }
      return styleObj;
    },
  },
};
</script>
<style scoped>
.offset {
  display: none;
}
.col-1 {
  display: block;
  flex: 0 0 4.17%;
}
.col-2 {
  display: block;
  flex: 0 0 8.33%;
}
.col-3 {
  display: block;
  flex: 0 0 12.5%;
}
.col-4 {
  display: block;
  flex: 0 0 16.67%;
}
.col-5 {
  display: block;
  flex: 0 0 20.83%;
}
.col-6 {
  display: block;
  flex: 0 0 25%;
}
.col-7 {
  display: block;
  flex: 0 0 29.17%;
}
.col-8 {
  display: block;
  flex: 0 0 33.33%;
}
.col-9 {
  display: block;
  flex: 0 0 37.5%;
}
.col-10 {
  display: block;
  flex: 0 0 41.67%;
}
.col-11 {
  display: block;
  flex: 0 0 45.83%;
}
.col-12 {
  display: block;
  flex: 0 0 50%;
}
.col-13 {
  display: block;
  flex: 0 0 54.17%;
}
.col-14 {
  display: block;
  flex: 0 0 58.33%;
}
.col-15 {
  display: block;
  flex: 0 0 62.5%;
}
.col-16 {
  display: block;
  flex: 0 0 66.67%;
}
.col-17 {
  display: block;
  flex: 0 0 70.83%;
}
.col-18 {
  display: block;
  flex: 0 0 75%;
}
.col-19 {
  display: block;
  flex: 0 0 79.17%;
}
.col-20 {
  display: block;
  flex: 0 0 83.33%;
}
.col-21 {
  display: block;
  flex: 0 0 87.5%;
}
.col-22 {
  display: block;
  flex: 0 0 4.17%;
}
.col-23 {
  display: block;
  flex: 0 0 91.67%;
}
.col-24 {
  display: block;
  flex: 0 0 95.83%;
}

@media screen and (max-width: 575px) {
  .col-xs-1 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-xs-2 {
    display: block;
    flex: 0 0 8.33%;
  }
  .col-xs-3 {
    display: block;
    flex: 0 0 12.5%;
  }
  .col-xs-4 {
    display: block;
    flex: 0 0 16.67%;
  }
  .col-xs-5 {
    display: block;
    flex: 0 0 20.83%;
  }
  .col-xs-6 {
    display: block;
    flex: 0 0 25%;
  }
  .col-xs-7 {
    display: block;
    flex: 0 0 29.17%;
  }
  .col-xs-8 {
    display: block;
    flex: 0 0 33.33%;
  }
  .col-xs-9 {
    display: block;
    flex: 0 0 37.5%;
  }
  .col-xs-10 {
    display: block;
    flex: 0 0 41.67%;
  }
  .col-xs-11 {
    display: block;
    flex: 0 0 45.83%;
  }
  .col-xs-12 {
    display: block;
    flex: 0 0 50%;
  }
  .col-xs-13 {
    display: block;
    flex: 0 0 54.17%;
  }
  .col-xs-14 {
    display: block;
    flex: 0 0 58.33%;
  }
  .col-xs-15 {
    display: block;
    flex: 0 0 62.5%;
  }
  .col-xs-16 {
    display: block;
    flex: 0 0 66.67%;
  }
  .col-xs-17 {
    display: block;
    flex: 0 0 70.83%;
  }
  .col-xs-18 {
    display: block;
    flex: 0 0 75%;
  }
  .col-xs-19 {
    display: block;
    flex: 0 0 79.17%;
  }
  .col-xs-20 {
    display: block;
    flex: 0 0 83.33%;
  }
  .col-xs-21 {
    display: block;
    flex: 0 0 87.5%;
  }
  .col-xs-22 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-xs-23 {
    display: block;
    flex: 0 0 91.67%;
  }
  .col-xs-24 {
    display: block;
    flex: 0 0 95.83%;
  }
}
@media screen and (min-width: 576px) {
  .col-sm-1 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-sm-2 {
    display: block;
    flex: 0 0 8.33%;
  }
  .col-sm-3 {
    display: block;
    flex: 0 0 12.5%;
  }
  .col-sm-4 {
    display: block;
    flex: 0 0 16.67%;
  }
  .col-sm-5 {
    display: block;
    flex: 0 0 20.83%;
  }
  .col-sm-6 {
    display: block;
    flex: 0 0 25%;
  }
  .col-sm-7 {
    display: block;
    flex: 0 0 29.17%;
  }
  .col-sm-8 {
    display: block;
    flex: 0 0 33.33%;
  }
  .col-sm-9 {
    display: block;
    flex: 0 0 37.5%;
  }
  .col-sm-10 {
    display: block;
    flex: 0 0 41.67%;
  }
  .col-sm-11 {
    display: block;
    flex: 0 0 45.83%;
  }
  .col-sm-12 {
    display: block;
    flex: 0 0 50%;
  }
  .col-sm-13 {
    display: block;
    flex: 0 0 54.17%;
  }
  .col-sm-14 {
    display: block;
    flex: 0 0 58.33%;
  }
  .col-sm-15 {
    display: block;
    flex: 0 0 62.5%;
  }
  .col-sm-16 {
    display: block;
    flex: 0 0 66.67%;
  }
  .col-sm-17 {
    display: block;
    flex: 0 0 70.83%;
  }
  .col-sm-18 {
    display: block;
    flex: 0 0 75%;
  }
  .col-sm-19 {
    display: block;
    flex: 0 0 79.17%;
  }
  .col-sm-20 {
    display: block;
    flex: 0 0 83.33%;
  }
  .col-sm-21 {
    display: block;
    flex: 0 0 87.5%;
  }
  .col-sm-22 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-sm-23 {
    display: block;
    flex: 0 0 91.67%;
  }
  .col-sm-24 {
    display: block;
    flex: 0 0 95.83%;
  }
}
@media screen and (min-width: 768px) {
  .col-md-1 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-md-2 {
    display: block;
    flex: 0 0 8.33%;
  }
  .col-md-3 {
    display: block;
    flex: 0 0 12.5%;
  }
  .col-md-4 {
    display: block;
    flex: 0 0 16.67%;
  }
  .col-md-5 {
    display: block;
    flex: 0 0 20.83%;
  }
  .col-md-6 {
    display: block;
    flex: 0 0 25%;
  }
  .col-md-7 {
    display: block;
    flex: 0 0 29.17%;
  }
  .col-md-8 {
    display: block;
    flex: 0 0 33.33%;
  }
  .col-md-9 {
    display: block;
    flex: 0 0 37.5%;
  }
  .col-md-10 {
    display: block;
    flex: 0 0 41.67%;
  }
  .col-md-11 {
    display: block;
    flex: 0 0 45.83%;
  }
  .col-md-12 {
    display: block;
    flex: 0 0 50%;
  }
  .col-md-13 {
    display: block;
    flex: 0 0 54.17%;
  }
  .col-md-14 {
    display: block;
    flex: 0 0 58.33%;
  }
  .col-md-15 {
    display: block;
    flex: 0 0 62.5%;
  }
  .col-md-16 {
    display: block;
    flex: 0 0 66.67%;
  }
  .col-md-17 {
    display: block;
    flex: 0 0 70.83%;
  }
  .col-md-18 {
    display: block;
    flex: 0 0 75%;
  }
  .col-md-19 {
    display: block;
    flex: 0 0 79.17%;
  }
  .col-md-20 {
    display: block;
    flex: 0 0 83.33%;
  }
  .col-md-21 {
    display: block;
    flex: 0 0 87.5%;
  }
  .col-md-22 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-md-23 {
    display: block;
    flex: 0 0 91.67%;
  }
  .col-md-24 {
    display: block;
    flex: 0 0 95.83%;
  }
}
@media screen and (min-width: 992px) {
  .col-lg-1 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-lg-2 {
    display: block;
    flex: 0 0 8.33%;
  }
  .col-lg-3 {
    display: block;
    flex: 0 0 12.5%;
  }
  .col-lg-4 {
    display: block;
    flex: 0 0 16.67%;
  }
  .col-lg-5 {
    display: block;
    flex: 0 0 20.83%;
  }
  .col-lg-6 {
    display: block;
    flex: 0 0 25%;
  }
  .col-lg-7 {
    display: block;
    flex: 0 0 29.17%;
  }
  .col-lg-8 {
    display: block;
    flex: 0 0 33.33%;
  }
  .col-lg-9 {
    display: block;
    flex: 0 0 37.5%;
  }
  .col-lg-10 {
    display: block;
    flex: 0 0 41.67%;
  }
  .col-lg-11 {
    display: block;
    flex: 0 0 45.83%;
  }
  .col-lg-12 {
    display: block;
    flex: 0 0 50%;
  }
  .col-lg-13 {
    display: block;
    flex: 0 0 54.17%;
  }
  .col-lg-14 {
    display: block;
    flex: 0 0 58.33%;
  }
  .col-lg-15 {
    display: block;
    flex: 0 0 62.5%;
  }
  .col-lg-16 {
    display: block;
    flex: 0 0 66.67%;
  }
  .col-lg-17 {
    display: block;
    flex: 0 0 70.83%;
  }
  .col-lg-18 {
    display: block;
    flex: 0 0 75%;
  }
  .col-lg-19 {
    display: block;
    flex: 0 0 79.17%;
  }
  .col-lg-20 {
    display: block;
    flex: 0 0 83.33%;
  }
  .col-lg-21 {
    display: block;
    flex: 0 0 87.5%;
  }
  .col-lg-22 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-lg-23 {
    display: block;
    flex: 0 0 91.67%;
  }
  .col-lg-24 {
    display: block;
    flex: 0 0 95.83%;
  }
}
@media screen and (min-width: 1200px) {
  .col-xl-1 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-xl-2 {
    display: block;
    flex: 0 0 8.33%;
  }
  .col-xl-3 {
    display: block;
    flex: 0 0 12.5%;
  }
  .col-xl-4 {
    display: block;
    flex: 0 0 16.67%;
  }
  .col-xl-5 {
    display: block;
    flex: 0 0 20.83%;
  }
  .col-xl-6 {
    display: block;
    flex: 0 0 25%;
  }
  .col-xl-7 {
    display: block;
    flex: 0 0 29.17%;
  }
  .col-xl-8 {
    display: block;
    flex: 0 0 33.33%;
  }
  .col-xl-9 {
    display: block;
    flex: 0 0 37.5%;
  }
  .col-xl-10 {
    display: block;
    flex: 0 0 41.67%;
  }
  .col-xl-11 {
    display: block;
    flex: 0 0 45.83%;
  }
  .col-xl-12 {
    display: block;
    flex: 0 0 50%;
  }
  .col-xl-13 {
    display: block;
    flex: 0 0 54.17%;
  }
  .col-xl-14 {
    display: block;
    flex: 0 0 58.33%;
  }
  .col-xl-15 {
    display: block;
    flex: 0 0 62.5%;
  }
  .col-xl-16 {
    display: block;
    flex: 0 0 66.67%;
  }
  .col-xl-17 {
    display: block;
    flex: 0 0 70.83%;
  }
  .col-xl-18 {
    display: block;
    flex: 0 0 75%;
  }
  .col-xl-19 {
    display: block;
    flex: 0 0 79.17%;
  }
  .col-xl-20 {
    display: block;
    flex: 0 0 83.33%;
  }
  .col-xl-21 {
    display: block;
    flex: 0 0 87.5%;
  }
  .col-xl-22 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-xl-23 {
    display: block;
    flex: 0 0 91.67%;
  }
  .col-xl-24 {
    display: block;
    flex: 0 0 95.83%;
  }
}
@media screen and (min-width: 1600px) {
  .col-xxl-1 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-xxl-2 {
    display: block;
    flex: 0 0 8.33%;
  }
  .col-xxl-3 {
    display: block;
    flex: 0 0 12.5%;
  }
  .col-xxl-4 {
    display: block;
    flex: 0 0 16.67%;
  }
  .col-xxl-5 {
    display: block;
    flex: 0 0 20.83%;
  }
  .col-xxl-6 {
    display: block;
    flex: 0 0 25%;
  }
  .col-xxl-7 {
    display: block;
    flex: 0 0 29.17%;
  }
  .col-xxl-8 {
    display: block;
    flex: 0 0 33.33%;
  }
  .col-xxl-9 {
    display: block;
    flex: 0 0 37.5%;
  }
  .col-xxl-10 {
    display: block;
    flex: 0 0 41.67%;
  }
  .col-xxl-11 {
    display: block;
    flex: 0 0 45.83%;
  }
  .col-xxl-12 {
    display: block;
    flex: 0 0 50%;
  }
  .col-xxl-13 {
    display: block;
    flex: 0 0 54.17%;
  }
  .col-xxl-14 {
    display: block;
    flex: 0 0 58.33%;
  }
  .col-xxl-15 {
    display: block;
    flex: 0 0 62.5%;
  }
  .col-xxl-16 {
    display: block;
    flex: 0 0 66.67%;
  }
  .col-xxl-17 {
    display: block;
    flex: 0 0 70.83%;
  }
  .col-xxl-18 {
    display: block;
    flex: 0 0 75%;
  }
  .col-xxl-19 {
    display: block;
    flex: 0 0 79.17%;
  }
  .col-xxl-20 {
    display: block;
    flex: 0 0 83.33%;
  }
  .col-xxl-21 {
    display: block;
    flex: 0 0 87.5%;
  }
  .col-xxl-22 {
    display: block;
    flex: 0 0 4.17%;
  }
  .col-xxl-23 {
    display: block;
    flex: 0 0 91.67%;
  }
  .col-xxl-24 {
    display: block;
    flex: 0 0 95.83%;
  }
}
</style>