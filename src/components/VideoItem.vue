<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Rating, VideoImage } from "@/types/VideoType";
const router = useRouter();
const props = defineProps<{
  id: number;
  image?: VideoImage;
  name: string;
  summary?: string;
  rating: Rating;
  genres: Array<string>;
  language?: string;
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
        :src="
          image?.medium ||
          'https://via.placeholder.com/210x295.png?text=image+not+found'
        "
        alt="video"
        title="video"
      />
      <div class="description" v-html="summary"></div>
    </div>
    <h3 class="name">{{ name }}</h3>
    <div class="attribute">
      Rate: <b v-if="rating.average">{{ rating.average }}</b> <i v-else>Empty</i>
    </div>
    <div class="attribute">
      Genre:
      <span v-if="genres.length > 0">
        <span v-for="(genre, idx) in genres" :key="idx"
          >{{ genre + (idx < genres.length - 1 ? ", " : "") }}
        </span>
      </span>
      <i v-else> Unknown </i>
    </div>
    <div class="attribute">Language: {{ language }}</div>
    <div class="attribute">Type: {{ type }}</div>
  </article>
</template>

<style>
.video {
  --video-height: 295px;
  --video-width: 210px;

  cursor: pointer;
  display: inline-block;
  width: var(--video-width);
  margin: 0.75rem;
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
  background-image: url("https://via.placeholder.com/210x295.png?text=Loading");
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

.video .name {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
.video .attribute {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
