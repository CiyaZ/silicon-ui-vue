<template>
  <span class="blink">&lt; SiliconUI 测试组件 &gt;</span>
</template>

<script>
export default {
  name: "si-test"
};
</script>

<style scoped>
span {
  padding: 5px;
  border-radius: 5px;
  color: white;
  border: 3px solid pink;
  background-color: rgb(255, 224, 229);
  cursor: pointer;
}
span:hover {
  background-color: rgb(250, 204, 212);
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
.blink {
  animation: blink 3s linear infinite;
}
</style>