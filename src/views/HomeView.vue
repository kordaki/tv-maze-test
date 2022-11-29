<script setup lang="ts">
import { onMounted } from "vue";
import isEmpty from "lodash/isEmpty";
import { useRoute } from "vue-router";
// stores
import { useVideoListStore } from "@/stores/videoList";
// components
import IconLoading from "@/components/icons/IconLoading.vue";
import VideoList from "@/components/VideoList.vue";
import SearchInput from "@/components/options/SearchInput.vue";
import SortButton from "@/components/options/SortButton.vue";
import SearchResult from "@/components/SearchResult.vue";

const videoListStore = useVideoListStore();
const route = useRoute();

onMounted(async () => {
  videoListStore.getVideoList();
});
</script>

<template>
  <main>
    <section class="filters">
      <SortButton />
      <SearchInput />
    </section>

    <SearchResult v-if="!isEmpty(route.query.q)" />
    <section v-else>
      <IconLoading v-if="videoListStore.videos.isLoading" />
      <section v-if="videoListStore.genresList.length > 0">
        <VideoList
          v-for="genre in videoListStore.genresList"
          :genre="genre"
          v-bind:key="genre"
        />
      </section>
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
