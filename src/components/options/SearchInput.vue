<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";
import { ref } from "vue";
const optionsStore = useOptionsStore();

const userSearchText = ref(optionsStore.searchText);

const searchHandler = (e: Event) => {
  e.preventDefault();
  optionsStore.updateSearchText(userSearchText.value);
};
</script>

<template>
  <section>
    <form @submit="searchHandler">
      <input
        type="search"
        name="search"
        placeholder="search here..."
        v-model="userSearchText"
      />
      <input type="submit" name="Search" />
    </form>
  </section>
</template>
