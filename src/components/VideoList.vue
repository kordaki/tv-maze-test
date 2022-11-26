<script setup lang="ts">
defineProps<{
  genre: string;
}>();
</script>

<template>
  <h1>{{ genre }}</h1>
  <p>List of videos will come here</p>
</template>
