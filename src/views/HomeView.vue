<script setup lang="ts">
import { onMounted } from "vue";
import IconLoading from "../components/icons/IconLoading.vue";
import VideoList from "../components/VideoList.vue";
import VideoItem from "../components/VideoItem.vue";
import { useVideosStore } from "@/stores/videos";

const videosStore = useVideosStore();

onMounted(async () => {
  videosStore.getVideoList();
});
</script>

<template>
  <main>
    <IconLoading v-if="videosStore.videos.isLoading" />
    <section v-if="videosStore.videoListByGenres">
      <VideoList
        v-for="genre in Object.keys(videosStore.videoListByGenres)"
        :genre="genre"
        v-bind:key="genre"
      />
    </section>
    <VideoItem />
  </main>
</template>
