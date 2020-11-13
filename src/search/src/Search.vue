<template>
  <div class="search">
    <input
      :class="['si-bg-' + inputBgColor, 'si-fg-' + inputFgColor]"
      :style="{ height: this.computedInputHeight + 'px' }"
      :placeholder="placeholder"
      type="text"
      @keyup.enter="this.onSearch"
      @change="this.onChange($event)"
    />
    <si-button
      :bgColor="btnBgColor"
      :fgColor="btnFgColor"
      :size="size"
      @click="this.onSearch"
      >{{ btnText }}</si-button
    >
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "si-search",
  props: {
    size: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["normal", "large"].indexOf(value) !== -1;
      },
    },
    tips: {
      type: Array,
      default: null,
    },
    btnBgColor: {
      type: String,
      default: "green-lighten-3",
    },
    btnFgColor: {
      type: String,
      default: "white",
    },
    btnText: {
      type: String,
      default: "搜索",
    },
    inputBgColor: {
      type: String,
      default: "white",
    },
    inputFgColor: {
      type: String,
      default: "black",
    },
    placeholder: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props) {
    const value = ref("");
    const computedInputHeight = computed(() => {
      if (props.size === "large") {
        return 40;
      } else {
        return 32;
      }
    });
    return { value, computedInputHeight };
  },
  emits: ["search", "change", "update:modelValue"],
  methods: {
    onSearch() {
      this.$emit("search", this.value);
    },
    onChange(ev) {
      this.value = ev.target.value;
      this.$emit("change", this.value);
      this.$emit("update:modelValue", this.value);
    },
    val(arg) {
      if (arg) {
        this.value = arg;
      }
      return this.value;
    },
  },
};
</script>
<style scoped>
.search {
  display: flex;
}
.search input {
  flex: 1 1;
  height: 32px;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  border-right: none;
  outline: none;
  padding: 2px 7px;
  transition: all 0.3s;
  color: var(--fg-color);
  background-color: var(--bg-color);
}

.search input:focus {
  border-top: 1px solid lightskyblue;
  border-bottom: 1px solid lightskyblue;
  border-left: 1px solid lightskyblue;
  border-right: none;
}

.search button {
  flex: 0 0;
  white-space: nowrap;
}
</style>