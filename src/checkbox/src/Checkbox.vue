<template>
  <div>
    <div :class="['form-input', 'form-input-' + layout]">
      <label
        :class="['si-fg-' + labelFgColor]"
        :style="computedLabelStyle"
        v-if="label"
        >{{ label }}</label
      >
      <div class="checkbox">
        <div
          v-for="(item, index) in items"
          :key="item.value"
          :class="['checkbox-item', 'si-fg-' + fgColor]"
        >
          <input
            v-model="value"
            type="checkbox"
            :name="'uid-' + uniqueId"
            :id="'uid-' + uniqueId + '-' + index"
            :value="item.value"
            @change="this.onChange($event)"
            :checked="item.value === initialValue ? 'checked' : undefined"
          />
          <label :for="'uid-' + uniqueId + '-' + index">{{ item.text }}</label>
        </div>
        <slot></slot>
      </div>
    </div>
    <div class="form-err" v-if="errMsg" :style="computedErrStyle">
      {{ errMsg }}
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import uid from "../../utils/uid";
export default {
  name: "si-checkbox",
  props: {
    items: {
      type: Array,
      required: true,
    },
    initialValue: {
      type: Array,
      default: null,
    },
    modelValue: {
      type: Array,
    },
    label: {
      type: String,
      default: null,
    },
    labelFgColor: {
      type: String,
      default: "gray",
    },
    labelWidth: {
      type: Number,
      default: 120,
    },
    fgColor: {
      type: String,
      default: "black",
    },
    layout: {
      type: String,
      default: "inline",
      validator: function (value) {
        return ["inline", "block"].indexOf(value) !== -1;
      },
    },
    errMsg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const uniqueId = uid();
    const value = ref(props.initialValue ? [...props.initialValue] : []);
    const computedLabelStyle = computed(() => {
      if (props.layout === "inline") {
        return { width: props.labelWidth + "px" };
      }
    });
    const computedErrStyle = computed(() => {
      if (props.layout === "inline") {
        return { marginLeft: props.labelWidth + 8 + "px" };
      }
    });
    return { value, uniqueId, computedLabelStyle, computedErrStyle };
  },
  emits: ["change", "update:modelValue"],
  mounted() {
    if (this.initialValue) {
      this.$emit("update:modelValue", this.value);
    }
  },
  methods: {
    onChange() {
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
.form-input {
  padding: 7px 9px;
}
.form-input > label {
  vertical-align: top;
  text-align: right;
  display: inline-block;
  padding: 4px;
  color: var(--fg-color);
}

.form-input .checkbox {
  display: inline-block;
  padding: 2px 7px;
  transition: all 0.3s;
  color: var(--fg-color);
}

.form-input .checkbox .checkbox-item {
  padding-bottom: 7px;
}

.form-input .checkbox .checkbox-item label {
  color: var(--fg-color);
}

.form-input.form-input-inline {
  display: flex;
}

.form-input.form-input-block > label {
  display: block;
  text-align: left;
}

.form-input.form-input-block .checkbox {
  display: block;
  width: 100%;
}

.form-err {
  margin-right: 9px;
  color: #ff0000;
}
</style>