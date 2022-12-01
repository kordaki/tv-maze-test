export type VideoImage = {
  medium: string;
  original: string;
};

export type Rating = {
  average: number;
};

export interface Video {
  id: number;
  language: string;
  name: string;
  rating: Rating;
  ended: string;
  url: string;
  weight: number;
  image: VideoImage;
  genres: Array<string>;
  summary: string;
  type: string;
}

export type KeyVideo = Record<Video["id"], Video>;

export interface VideoResponse {
  data: Video;
}
