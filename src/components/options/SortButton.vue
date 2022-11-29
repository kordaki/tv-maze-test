<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const isSortEnabled = ref(Boolean(route.query.sortByRaring));

const switchSortByRating = (e: Event) => {
  e.preventDefault();
  isSortEnabled.value = !isSortEnabled.value;
  router.push({
    name: "home",
    query: { ...route.query, isSortEnable: isSortEnabled.value.toString() },
  });
};
</script>

<template>
  <section>
    <input
      type="checkbox"
      id="sort-by-rating"
      value="sort-by-rating"
      :checked="isSortEnabled"
    />
    <label for="sort-by-rating" @click="switchSortByRating">
      Sort by Rating</label
    ><br />
  </section>
</template>
