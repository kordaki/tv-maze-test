<script setup lang="ts">
import { useVideosStore } from "@/stores/videos";

defineProps<{
  genre: string;
}>();

const videosStore = useVideosStore();
</script>

<template>
  <h1>{{ genre }}</h1>
  <span
    v-for="video in videosStore.videoListByGenre(genre)"
    v-bind:key="video.id"
    >{{ video.name }} -</span
  >
  <p>List of videos will come here</p>
</template>
