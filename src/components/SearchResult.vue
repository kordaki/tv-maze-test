<script setup lang="ts">
import { watch } from "vue";
import isEmpty from "lodash/isEmpty";
import { useRoute, useRouter } from "vue-router";
import { useSearchedListStore } from "@/stores/searchedList";
import { computed } from "@vue/reactivity";
// components
import VideoItem from "./VideoItem.vue";
import IconLoading from "./icons/IconLoading.vue";
import ErrorContent from "./common/ErrorContent.vue";
import NotFound from "./common/NotFound.vue";

const searchedListStore = useSearchedListStore();
const router = useRouter();
const route = useRoute();
</script>

<template>
  <h2>Search result of {{ route.query.q }}</h2>
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
  List of result / not found / error
</template>
