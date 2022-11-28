<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{
  id: number;
  image: string;
  title: string;
  summary: string;
  averageRating: number;
  genres: Array<string>;
  language: string;
  type: string;
}>();

const navigateToVideoPage = () => {
  router.push({
    name: "video",
    params: {
      id: props.id,
    },
  });
};
</script>

<template>
  <article class="video" @click="navigateToVideoPage">
    <div class="hero">
      <img
        :src="image || 'https://via.placeholder.com/210x295.png?text=image+not+found'"
        alt="video"
        title="video"
      />
      <div class="description" v-html="summary"></div>
    </div>
    <h3>{{ title }}</h3>
    <span
      >Rate: <b>{{ averageRating }}</b></span
    >
    <div>
      Genre:
      <span v-for="(genre, idx) in genres" :key="idx"
        >{{ genre + (idx < genres.length - 1 ? ", " : "") }}
      </span>
    </div>
    <div>Language: {{ language }}</div>
    <div>Type: {{ type }}</div>
  </article>
</template>

<style>
.video {
  --video-height: 295px;
  --video-width: 210px;

  width: var(--video-width);
  padding: 0.5 rem;
}

.video .hero {
  height: var(--video-height);
  width: var(--video-width);
  /* overflow: hidden; */
  position: relative;
}
.video .hero img {
  height: var(--video-height);
  width: var(--video-width);
  object-fit: cover;
  background-image: url('https://via.placeholder.com/210x295.png?text=Loading');
}

.video .hero .description {
  position: absolute;
  top: 0;
  height: var(--video-height);
  width: var(--video-width);
  opacity: 0;
  top: 10%;
  transition: all 0.5s ease-out;

  padding: 1rem;
  background-color: rgba(16, 16, 16, 0.8);
  font: 0.8rem/1rem tahoma;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.video:hover .hero .description {
  opacity: 1;
  top: 0;
}
</style>
