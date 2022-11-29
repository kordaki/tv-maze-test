<script setup lang="ts">
import { onMounted } from "vue";
import isEmpty from "lodash/isEmpty";
import IconLoading from "../components/icons/IconLoading.vue";
import VideoList from "../components/videoList/VideoList.vue";
import { useVideoListStore } from "@/stores/videoList";
import { useOptionsStore } from "@/stores/options";
import SearchInput from "@/components/options/SearchInput.vue";
import SortButton from "@/components/options/SortButton.vue";
import SearchResult from "@/components/search/SearchResult.vue";

const videoListStore = useVideoListStore();
const optionsStore = useOptionsStore();

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

    <SearchResult v-if="!isEmpty(optionsStore.searchText)" />
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
