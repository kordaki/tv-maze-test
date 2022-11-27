<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  summary: string;
  averageRating: number;
  genres: Array<string>;
  language: string;
  type: string;
}>();

// const image =
//   "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg";
// const title = "Person of Interest";
// const summary =
//   '<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>';
// const averageRating = 7.5;
// const genres = ["Drama", "Horror", "Romance"];
// const language = "English";
// const type = "Sport";
</script>

<template>
  <article class="video">
    <div class="hero">
      <img :src="image" alt="video" title="video" />
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
