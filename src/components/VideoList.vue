<script setup lang="ts">
import VideoItem from "./VideoItem.vue";
import { useVideoListStore } from "@/stores/videoList";
defineProps<{
  genre: string;
}>();

const videoListStore = useVideoListStore();
</script>

<template>
  <h2 class="genre-title">{{ genre }}</h2>
  <section class="video-list">
    <VideoItem
      v-for="video in videoListStore.videoListByGenre(genre)"
      v-bind:key="video.id"
      :id="video.id"
      :image="video.image?.medium"
      :title="video.name"
      :summary="video.summary"
      :averageRating="video.rating.average"
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
