<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getVideoScheduleRequest } from "@/services/api/VideoDataService";
import { videoGenresListMaker } from "@/services/VideoGenresList";
import IconLoading from "../components/icons/IconLoading.vue";
import VideoList from "../components/VideoList.vue";
import VideoItem from "../components/VideoItem.vue";

const isLoading = ref(false);
const videoListByGenres = ref();

onMounted(async () => {
  isLoading.value = true;
  const [error, response] = await getVideoScheduleRequest();
  if (!error) {
    const videoListGroupedByGenre = videoGenresListMaker(response);
    videoListByGenres.value = videoListGroupedByGenre;
  }
  isLoading.value = false;
});
</script>

<template>
  <main>
    <IconLoading v-if="isLoading" />
    <section v-if="videoListByGenres">
      <VideoList
        v-for="genre in Object.keys(videoListByGenres)"
        :genre="genre"
        v-bind:key="genre"
      />
    </section>
    <VideoItem />
  </main>
</template>
