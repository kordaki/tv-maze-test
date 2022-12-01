import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useSearchListStore } from "@/stores/searchList";

describe("SearchList Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Videos should start with loading:false, error:null, list: {}", () => {
    const videoListStore = useSearchListStore();
    expect(videoListStore.videos.isLoading).toStrictEqual(false);
    expect(videoListStore.videos.error).toStrictEqual(null);
    expect(videoListStore.videos.list).toStrictEqual({});
  });

  test("Videos should start loading", () => {
    const videoListStore = useSearchListStore();
    videoListStore.updateVideos({ isLoading: true, error: null });
    expect(videoListStore.videos.isLoading).toStrictEqual(true);
  });
});
