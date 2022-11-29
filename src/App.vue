<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import MainHeader from "./components/MainHeader.vue";
</script>

<template>
  <MainHeader />
  <RouterView />
</template>
