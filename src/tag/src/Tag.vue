<template>
  <div
    v-if="renderType === 'text'"
    :class="computedClass"
    @click.prevent.stop="this.__handleClick"
  >
    <span>{{ text }}</span>
  </div>
  <div v-if="renderType === 'link'" :class="computedClass">
    <a :href="this.href">
      <span>{{ text }}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "si-tag",
  props: {
    text: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: "green-lighten-3",
    },
    fgColor: {
      type: String,
      default: "white",
    },
    border: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    renderType() {
      return this.href ? "link" : "text";
    },
    computedClass() {
      let classArr = [];
      classArr.push("tag");
      classArr.push("si-bg-" + this.bgColor);
      classArr.push("si-fg-" + this.fgColor);
      if (this.border) {
        classArr.push("bordered");
      }
      return classArr;
    },
  },
  emits: ["click"],
  methods: {
    __handleClick() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.tag {
  display: inline-block;
  padding: 2px 4px 2px 4px;
  font-size: 14px;
  cursor: pointer;
  background-color: var(--bg-color);
  color: var(--fg-color);
  transition: all 0.3s;
}
.tag:hover {
  background-color: var(--bg-hover-color);
}
.tag.bordered {
  border: 1px solid var(--fg-color);
}
.tag a {
  text-decoration: none;
  color: inherit;
}
</style>