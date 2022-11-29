<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";
const optionsStore = useOptionsStore();
</script>

<template>
  <section>
    <input
      type="checkbox"
      id="sort-by-rating"
      value="sort-by-rating"
      v-model="optionsStore.isSortByRating"
    />
    <label for="sort-by-rating"> Sort by rates</label><br />
  </section>
</template>
