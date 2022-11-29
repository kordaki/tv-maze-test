import { ref } from "vue";
import { defineStore } from "pinia";

export const useOptionsStore = defineStore("options", () => {
  const searchText = ref("");
  const isSortByRating = ref(false);

  // actions
  const updateSearchText = (text: string) => {
    searchText.value = text;
  };

  const switchSortByRating = (val: boolean) => {
    isSortByRating.value = val;
  };

  return {
    searchText,
    isSortByRating,
    updateSearchText,
    switchSortByRating,
  };
});
