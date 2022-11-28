<script setup lang="ts">
import VideoItem from "./VideoItem.vue";
import { useVideosStore } from "@/stores/videos";
defineProps<{
  genre: string;
}>();

const videosStore = useVideosStore();
</script>

<template>
  <h1>{{ genre }}</h1>
  <VideoItem
    v-for="video in videosStore.videoListByGenre(genre)"
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
</template>
