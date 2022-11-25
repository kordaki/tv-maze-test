<script setup lang="ts">
const image =
  "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg";
const title = "Person of Interest";
const summary =
  '<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>';
const averageRating = 7.5;
const genres = ["Drama", "Horror", "Romance"];
</script>

<template>
  <article>
    <img :src="image" alt="video" title="video" />
    <h3>{{ title }}</h3>
    <span
      >Rate: <b>{{ averageRating }}</b></span
    >
    <div>
      Genre:
      <!-- <div v-bind="genres.join(', ')"></div> -->
      <span v-for="(genre, idx) in genres" :key="idx"
        >{{ genre + (idx < genres.length - 1 ? ", " : "") }}
      </span>
    </div>
    <div v-html="summary"></div>
  </article>
</template>
