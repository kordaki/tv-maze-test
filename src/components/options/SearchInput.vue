<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const userSearchQuery = ref("");

const searchHandler = (e: Event) => {
  e.preventDefault();
  router.push({
    name: "home",
    query: { ...route.query, q: userSearchQuery.value },
  });
};
</script>

<template>
  <section>
    <form @submit="searchHandler">
      <input
        type="search"
        name="search"
        placeholder="search here..."
        v-model="userSearchQuery"
      />
      <input type="submit" name="Search" />
    </form>
  </section>
</template>
