import http from "@/configs/http";
import type { Video, VideoResponse } from "@/types/Video";

export default class VideoDataService {
  getAll(): Promise<any> {
    return http.get("/search/shows");
  }

  // get(id: Number): Promise<any> {
  //   return http.get(`/shows/${id}`);
  // }

  findByTitle(title: string): Promise<any> {
    return http.get(`/search/shows?q=${title}`);
  }
}

export async function getVideoRequest(id: Number) {
  try {
    const response: VideoResponse = await http.get(`/shows/${id}`);
    const video: Video = response.data;
    return [null, video];
  } catch (err) {
    return [err];
  }
}
