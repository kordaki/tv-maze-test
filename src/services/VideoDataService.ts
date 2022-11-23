import http from "@/configs/http";

class VideoDataService {
  getAll(): Promise<any> {
    return http.get("/search/shows");
  }

  get(id: Number): Promise<any> {
    return http.get(`/shows/${id}`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/search/shows?q=${title}`);
  }
}

export default new VideoDataService();
