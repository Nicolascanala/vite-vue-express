<script setup>
import { reactive, inject } from "vue";
import { useRouter } from "vue-router";
import moods from "../utils/Moods";

const store = inject("store");
const router = useRouter();
const result = reactive([]);

const onChange = (e) => {
  const selectedMood = moods.filter((item) => item.mood == e.target.value);
  result.value = selectedMood[0];
};

const onSubmit = () => {
  fetch(import.meta.env.VITE_MOOD_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: result.value
      ? JSON.stringify({ mood: result.value.mood })
      : JSON.stringify({ mood: moods[2].mood }),
  })
    .then((response) => response.json())
    .then((message) => {
      store.state.responseMessage = message.mssg;
      router.push({ path: "/success" });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>


<template>
  <div class="container">
    <h1 class="title">Hapiness Slider</h1>
    <img :src="result.value ? result.value.img : moods[2].img" />
    <input
      type="range"
      min="1"
      max="5"
      step="1"
      value="3"
      class="slider"
      @change="onChange"
    />
    <p class="text">
      Are you feeling {{ result.value ? result.value.name : "Neutral" }}?
    </p>
    <button class="btn" @click="onSubmit">Submit</button>
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
  margin: 0;
}
.text {
  font-size: calc(1rem + 1vw);
}
img {
  width: 20vw;
  margin: 20px;
}
.btn {
  padding: 6px 16px;
  background-color: #fffdd0;
  color: #2c3e50;
  border-radius: 6px;
  border: 1px solid rgba(7, 8, 8, 0.15);
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  font-weight: 600;
  font-size: calc(0.5rem + 1vw);
}
.btn:hover {
  color: green;
  cursor: pointer;
}
.slider {
  -webkit-appearance: none;
  width: 25vw;
  height: 1vh;
  background: #ffe5b4;
  outline: none;
  border: 4px solid #fffdd0;
  border-radius: 8px;
  margin: 10px;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 2vw;
  height: 6vh;
  background: #ffe5b4;
  cursor: pointer;
  border: 4px solid #fffdd0;
  border-radius: 4px;
}
.slider::-moz-range-thumb {
  width: 20px;
  height: 60px;
  background: #ffe5b4;
  cursor: pointer;
  border: 5px solid #fffdd0;
  border-radius: 4px;
}
</style>