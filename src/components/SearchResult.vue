<script setup lang="ts">
import VideoItem from "./VideoItem.vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
</script>

<template>
  <h2>Search result of {{ route.query.q }}</h2>
  <section class="search-video-list">
    <!-- <VideoItem
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
    /> -->
  </section>
  List of result / not found / error
</template>
