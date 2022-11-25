<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { getVideoRequest } from "@/services/VideoDataService";
import type { Video } from "@/types/VideoType";

const route = useRoute();

let video: Video = reactive<Video>({});
const videoId: Number = ref<Number>(0);

const getVideo = async (id: Number) => {
  const [error, videoData] = await getVideoRequest(id);
  if (error) console.warn(error);
  else video = videoData;
};

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
</template>
