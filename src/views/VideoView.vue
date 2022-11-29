<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import isEmpty from "lodash/isEmpty";
// stores
import { useVideoStore } from "@/stores/video";
// components
import IconLoading from "@/components/icons/IconLoading.vue";
import NotFound from "@/components/common/NotFound.vue";
import ErrorContent from "@/components/common/ErrorContent.vue";

const route = useRoute();
const videoStore = useVideoStore();

onMounted(() => {
  videoStore.getVideo(Number(route.params.id));
});
</script>

<template>
  <IconLoading v-if="videoStore.video.isLoading" />
  <ErrorContent v-else-if="videoStore.video.error" />
  <NotFound v-else-if="isEmpty(videoStore.video.data)" />
  <section class="video-page" v-else>
    <div class="image">
      <img
        v-if="!isEmpty(videoStore.video.data.image)"
        :src="videoStore.video.data.image.original"
      />
    </div>
    <div class="content">
      <h1 class="title">{{ videoStore.video.data.name }}</h1>
      <ul class="attribute">
        <li>
          Rate:
          <b v-if="videoStore.video.data.rating.average">{{
            videoStore.video.data.rating.average
          }}</b>
          <i v-else>Empty</i>
        </li>
        <li>
          Genre:
          <span v-if="videoStore.video.data.genres.length > 0">
            <span
              v-for="(genre, idx) in videoStore.video.data.genres"
              :key="idx"
              >{{
                genre +
                (idx < videoStore.video.data.genres.length - 1 ? ", " : "")
              }}
            </span>
          </span>
          <i v-else> Unknown </i>
        </li>
        <li>Language: {{ videoStore.video.data.language }}</li>
        <li>Type: {{ videoStore.video.data.type }}</li>
      </ul>
      <div
        class="attribute summary"
        v-html="videoStore.video.data.summary"
      ></div>
    </div>
  </section>
</template>

<style>
.video-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.video-page .image {
  flex: 1;
  width: 100%;
}
.video-page .image img {
  object-fit: cover;
  max-width: 100%;
}

.video-page .content {
  flex: 1;
  padding: 1rem;
}

.video-page .content .summary {
  margin: 1rem 0;
  padding: 0.5rem;
  background: var(--color-background-mute);
}

@media (min-width: 768px) {
  .video-page {
    flex-direction: row;
  }
  .video-page .image {
    width: 50%;
  }
}
</style>
