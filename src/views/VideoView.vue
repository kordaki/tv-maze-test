<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { id } = route.params;
const videoId = ref(id);
const showId = () => console.log(id);

watch(
  () => route.params.id,
  async (newId) => {
    console.log("Video Id is" + newId);
    videoId.value = newId;
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <h1>
    The video id is <b>{{ videoId }}</b>
  </h1>
  <button @click="showId">Hello</button>
</template>
