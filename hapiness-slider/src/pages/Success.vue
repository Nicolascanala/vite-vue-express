<script setup>
import { inject } from "vue";
const store = inject("store");
console.log({ resp: store.state.responseMessage });
</script>

<template>
  <div class="container">
    <h1 class="title">Thank you for sharing!</h1>
    <p class="text">{{ store.state.responseMessage }}</p>
  </div>
</template>


<style scoped>
.container {
  background-color: #39b8ff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: calc(1.5rem + 3.2vw);
  color: #269e48;
}
.text {
  font-size: calc(1rem + 1vw);
}
</style>