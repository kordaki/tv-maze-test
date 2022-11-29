<script setup lang="ts">
import { watch } from "vue";
import isEmpty from "lodash/isEmpty";
import { useRoute, useRouter } from "vue-router";
// stores
import { useSearchedListStore } from "@/stores/searchedList";
// components
import VideoItem from "./VideoItem.vue";
import IconLoading from "./icons/IconLoading.vue";
import ErrorContent from "./common/ErrorContent.vue";
import NotFound from "./common/NotFound.vue";

const searchedListStore = useSearchedListStore();
const router = useRouter();
const route = useRoute();

const cancelSearch = () => {
  const { q, ...newQuery } = route.query;
  router.push({
    name: "home",
    query: newQuery,
  });
};

watch(
  () => route.query.q,
  async (newQuery: string) => {
    searchedListStore.searchVideoRequest(newQuery);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <section class="search-result">
    <div class="top">
      <h2>
        Search result about <i>"{{ route.query.q }}"</i>
      </h2>
      <button @click="cancelSearch">Cancel Search</button>
    </div>
    <section class="search-video-list">
      <IconLoading v-if="searchedListStore.videos.isLoading" />
      <ErrorContent v-else-if="searchedListStore.videos.error" />
      <NotFound v-else-if="isEmpty(searchedListStore.videos.list)" />

      <VideoItem
        v-else
        v-for="video in searchedListStore.videos.list"
        v-bind:key="video.id"
        :id="video.id"
        :image="video.image?.medium"
        :title="video.name"
        :summary="video.summary"
        :averageRating="video.rating?.average"
        :language="video.language"
        :type="video.type"
        :genres="video.genres"
      />
    </section>
  </section>
</template>

<style>
.search-result .top {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
