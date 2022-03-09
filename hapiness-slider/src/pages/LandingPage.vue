<script setup>
import { inject } from "vue";
import neutral from "../assets/States/happyhead-3-neutral-Icon/Happyhead/3-neutral.svg";
const store = inject("store");
</script>

<template>
  <div class="container">
    <h1 class="title">Hapiness Slider</h1>
    <img :src="neutral" alt="" />
    <h2>How's your day going?</h2>
    <router-link to="/slider" class="link">Let's find out!</router-link>
  </div>
</template>

<style>
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
}
img {
  width: 25vw;
}
.link {
  color: white;
  font-size: calc(1rem + 2vw);
}
.link:hover {
  color: rgb(20, 172, 20);
}
</style>