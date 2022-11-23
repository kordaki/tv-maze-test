<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import VideoDataService from "@/services/VideoDataService";
import type { VideoResponse, Video } from "@/types/Video";

const route = useRoute();
const { id } = route.params;
let video = reactive<Video>({});
const videoId: Number = ref<Number>(id);

const getVideo = (id: Number) => {
  VideoDataService.get(id)
    .then((response: VideoResponse) => {
      video = response.data;
    })
    .catch((e: Error) => {
      console.log(e);
    });
};

const showId = () => console.log(id);

watch(
  () => route.params.id,
  async (newId: Number) => {
    videoId.value = newId;
    getVideo(newId);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <h1>
    <img :src="video.image.medium" v-if="video.image" />
    The video id is <b>{{ video.name }}</b>
  </h1>
  <button @click="showId">Hello</button>
</template>
