<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useVideoStore } from "@/stores/video";
import IconLoading from "@/components/icons/IconLoading.vue";

const route = useRoute();
const videoStore = useVideoStore();

onMounted(() => {
  videoStore.getVideo(Number(route.params.id));
  console.log();
});
</script>

<template>
  <IconLoading v-if="videoStore.video.isLoading" />
  <section v-else>
    <img
      v-if="videoStore.video.data?.image"
      :src="videoStore.video.data?.image?.medium"
    />
    <h1>
      The video id is <b>{{ videoStore.video.data?.name }}</b>
    </h1>
  </section>
</template>
