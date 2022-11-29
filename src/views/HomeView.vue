<script setup lang="ts">
import { onMounted } from "vue";
import IconLoading from "../components/icons/IconLoading.vue";
import VideoList from "../components/videoList/VideoList.vue";
import { useVideosStore } from "@/stores/videos";
import SearchInput from "@/components/videoList/SearchInput.vue";
import SortButton from "@/components/videoList/SortButton.vue";

const videosStore = useVideosStore();

onMounted(async () => {
  videosStore.getVideoList();
});
</script>

<template>
  <main>
    <section class="filters">
      <SortButton />
      <SearchInput />
    </section>

    <IconLoading v-if="videosStore.videos.isLoading" />
    <section v-if="videosStore.genresList.length > 0">
      <VideoList
        v-for="genre in videosStore.genresList"
        :genre="genre"
        v-bind:key="genre"
      />
    </section>
  </main>
</template>

<style>
.filters {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0;
}

@media (min-width: 1024px) {
  .filters {
    flex-direction: row;
  }
}
</style>
