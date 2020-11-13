<template>
  <div :class="computedTabClass">
    <div
      v-for="(item, index) in currentItems"
      :key="index"
      :class="[
        ...computedItemClass,
        index === this.currentActive ? 'active' : undefined,
      ]"
      @click.prevent.stop="__handleItemClick(index)"
    >
      <span>{{ item.text }}</span>
      <span class="item-icon">
        <si-icon
          iconName="close"
          v-if="item.allowClose"
          fgColor="fgColor"
          @click.prevent.stop="__handleItemClose(index)"
        />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "si-tab",
  props: {
    items: {
      type: Array,
      validator: function (value) {
        return value && value.length >= 1;
      },
    },
    bgColor: {
      type: String,
      default: "none",
    },
    itemBgColor: {
      type: String,
      default: "light-green-lighten-1",
    },
    fgColor: {
      type: String,
      default: "white",
    },
    defaultActive: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentItems: [],
      currentActive: 0,
    };
  },
  computed: {
    computedTabClass() {
      let classArr = [];
      classArr.push("tab");
      classArr.push("si-bg-" + this.bgColor);
      return classArr;
    },
    computedItemClass() {
      let classArr = [];
      classArr.push("item");
      classArr.push("si-fg-" + this.fgColor);
      classArr.push("si-bg-" + this.itemBgColor);
      return classArr;
    },
  },
  mounted() {
    this.currentItems = this.items;
    this.currentActive = this.defaultActive;
  },
  emits: ["item-selected", "item-deleted"],
  methods: {
    __handleItemClick(index) {
      this.currentActive = index;
      this.$emit("item-selected", this.currentItems[this.currentActive].key);
    },
    __handleItemClose(index) {
      this.$emit("item-deleted", this.currentItems[index].key);
      if (this.currentActive > index) {
        this.currentActive--;
      }
      this.currentItems.splice(index, 1);
      this.$emit("item-selected", this.currentItems[this.currentActive].key);
    },
    switchItem(key) {
      let i;
      for (i = 0; i < this.currentItems; i++) {
        if (this.currentItems[i].key === key) {
          break;
        }
      }
      this.currentActive = i;
    },
    pushItem(item) {
      this.currentItems.push(item);
    },
  },
};
</script>
<style scoped>
.tab {
  overflow: hidden;
  background-color: var(--bg-color);
}
.item {
  overflow: hidden;
  float: left;
  padding: 10px 17px;
  cursor: pointer;
  color: var(--fg-color);
  background-color: var(--bg-color);
  transition: all 0.3s;
}
.item:hover {
  background-color: var(--bg-hover-color);
}
.item.active {
  background-color: var(--bg-active-color);
}
.item .item-icon {
  margin-left: 10px;
}
</style>