export type VideoImage = {
  medium: String;
  original: String;
};

export interface Video {
  id: Number;
  language: String;
  name: String;
  averageRuntime: Number;
  ended: String;
  url: String;
  weight: Number;
  image: VideoImage;
  genres: Array<String>;
  summary: String;
  type: String;
}

export interface VideoResponse {
  data: Video;
}
