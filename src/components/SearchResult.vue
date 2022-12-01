<script setup lang="ts">
import { watch } from "vue";
import isEmpty from "lodash/isEmpty";
import { useRoute, useRouter } from "vue-router";
// stores
import { useSearchListStore } from "@/stores/searchList";
// components
import VideoItem from "./VideoItem.vue";
import IconLoading from "./icons/IconLoading.vue";
import ErrorContent from "./common/ErrorContent.vue";
import NotFound from "./common/NotFound.vue";

const searchListStore = useSearchListStore();
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
    searchListStore.searchVideoRequest(newQuery);
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
      <IconLoading v-if="searchListStore.videos.isLoading" />
      <ErrorContent v-else-if="searchListStore.videos.error" />
      <NotFound v-else-if="isEmpty(searchListStore.videos.list)" />

      <VideoItem
        v-else
        v-for="video in searchListStore.videos.list"
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
