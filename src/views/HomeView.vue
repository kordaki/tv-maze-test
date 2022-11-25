<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getVideoScheduleRequest } from "@/services/VideoDataService";
import IconLoading from "../components/icons/IconLoading.vue";
import VideoItem from "../components/VideoItem.vue";

const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  const response = await getVideoScheduleRequest();
  isLoading.value = false;
});
</script>

<template>
  <main>
    <IconLoading v-if="isLoading" />
    <VideoItem />
  </main>
</template>
