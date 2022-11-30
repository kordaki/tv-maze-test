import { MockBuilder } from "./MockBuilder";

export class VideoListMockBuilder extends MockBuilder {
  create() {
    return {
      id: this.randomId(),
      image: this.randomImage(),
      name: this.randomName(),
      summary: this.randomSummary(),
      rating: this.randomRating(),
      genres: this.randomGenre(),
      language: this.randomLanguage(),
      type: this.randomType(),
    };
  }

  createListOf(number: number) {
    const videoList = [];
    for (let i = 0; i < number; i++) {
      videoList.push(this.create());
    }
    return videoList;
  }
}
