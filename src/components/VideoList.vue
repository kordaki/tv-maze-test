<script setup lang="ts">
import { useRoute } from "vue-router";
// stores
import { useVideoListStore } from "@/stores/videoList";
//components
import VideoItem from "./VideoItem.vue";

const route = useRoute();
defineProps<{
  genre: string;
}>();
const videoListStore = useVideoListStore();
</script>

<template>
  <h2 class="genre-title">{{ genre }}</h2>
  <section class="video-list">
    <VideoItem
      v-for="video in videoListStore.videoListByGenre(
        genre,
        route.query.isSortEnable === 'true'
      )"
      v-bind:key="video.id"
      :id="video.id"
      :image="video.image"
      :name="video.name"
      :summary="video.summary"
      :rating="video.rating"
      :language="video.language"
      :type="video.type"
      :genres="video.genres"
    />
  </section>
</template>

<style>
.genre-title {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.video-list {
  overflow-x: auto;
  white-space: nowrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
</style>
