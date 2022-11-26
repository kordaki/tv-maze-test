import type { Schedule } from "@/types/VideoListType";

export const videoGenresListMaker = (data: any) => {
  if (!data) return {};
  const genres = { unknown: [] };
  Object.values(data).forEach((video: Schedule) => {
    if (video.genres.length === 0) {
      genres["unknown"].push(video.id);
      return;
    }
    video.genres.forEach((genre) => {
      if (genres[genre]) {
        genres[genre].push(video.id);
      } else {
        genres[genre] = [video.id];
      }
    });
  });
  return genres;
};
