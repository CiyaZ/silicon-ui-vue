<template>
  <div :class="{ step: true, clickable }">
    <template v-for="(item, index) in items" :key="index">
      <div v-if="index !== 0" :class="['sepline', 'si-bg-' + bgColor]">
        <div></div>
      </div>
      <div :class="{ infoblock: true, active: index <= currentStep }">
        <div
          :class="['icon', 'si-bg-' + bgColor, 'si-fg-' + iconFgColor]"
          @click.prevent.stop="__handleStepSelected(index)"
        >
          {{ index + 1 }}
        </div>
        <div :class="['text', 'si-fg-' + textFgColor]">{{ item.text }}</div>
      </div>
    </template>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "si-step",
  props: {
    items: {
      type: Array,
      validator: function (value) {
        return value && value.length >= 2;
      },
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    initialStep: {
      type: Number,
      default: 0,
    },
    bgColor: {
      type: String,
      default: "green-lighten-3",
    },
    iconFgColor: {
      type: String,
      default: "white",
    },
    textFgColor: {
      type: String,
      default: "black",
    },
  },
  setup(props, { emit }) {
    const currentStep = ref(props.initialStep);
    const getCurrentStep = () => currentStep.value;
    const nextStep = () => {
      setStep(currentStep.value + 1);
    };
    const setStep = (stepIndex) => {
      if (stepIndex < 0) stepIndex = 0;
      if (stepIndex >= props.items.length) stepIndex = props.items.length - 1;
      currentStep.value = stepIndex;
    };
    const __handleStepSelected = (index) => {
      if (props.clickable) {
        emit("step-selected", index);
      }
    };
    return {
      currentStep,
      getCurrentStep,
      nextStep,
      setStep,
      __handleStepSelected,
    };
  },
  emits: ["step-selected"],
};
</script>
<style scoped>
.step {
  display: flex;
  flex-wrap: nowrap;
  height: 40px;
}
.step .sepline {
  flex: 1 1;
  padding: 0 5px;
}
.step .sepline div {
  height: 20px;
  border-bottom: 1px solid var(--border-color);
}
.step .infoblock {
  overflow: hidden;
  flex: 1 1;
  white-space: nowrap;
  text-align: center;
}
.step .infoblock .icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 16px;
  line-height: 34px;
  border-radius: 999px;
  text-align: center;
  color: #ffffff;
  background-color: rgba(203, 203, 203, 1);
  border: 3px solid rgba(203, 203, 203, 0.9);
}
.step .infoblock.active .icon {
  color: var(--fg-color);
  border: 3px solid var(--border-color);
  background-color: var(--bg-color);
}
.step.clickable .infoblock.active .icon {
  cursor: pointer;
}
.step .infoblock .text {
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  margin-left: 10px;
  color: rgba(128, 128, 128, 1);
}
.step .infoblock.active .text {
  color: var(--fg-color);
}
</style>