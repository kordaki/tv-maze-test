import http from "@/configs/http";
import type { VideoListResponse, Schedule } from "@/types/VideoListType";
import type { Video, VideoResponse } from "@/types/VideoType";

export async function getVideoScheduleRequest() {
  try {
    // const response: VideoListResponse = await http.get(`/schedule/full`);
    const response: VideoListResponse = await http.get(`/schedule/web?date=2021-05-29`);
    console.log("-------", response);
    const schedules: Array<Schedule> = response.data;
    return [null, schedules];
  } catch (err) {
    return [err];
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
