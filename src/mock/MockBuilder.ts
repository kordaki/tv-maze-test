import {
  idList,
  nameList,
  languageList,
  genreList,
  summaryList,
  typeList,
  imageList,
} from "./data";
export class MockBuilder {
  randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomItemInArray(data: Array<any>) {
    return data[this.randomBetween(1, data.length)];
  }

  randomId() {
    return this.randomItemInArray(idList);
  }

  randomName() {
    return this.randomItemInArray(nameList);
  }

  randomLanguage() {
    return this.randomItemInArray(languageList);
  }

  randomGenre() {
    const possibleCounts = this.randomBetween(0, 3);
    const genresList: Array<string> = [];
    for (let i = 0; i < possibleCounts; i++) {
      genreList.push(this.randomItemInArray(genreList));
    }
    return genresList;
  }

  randomSummary() {
    return this.randomItemInArray(summaryList);
  }

  randomType() {
    return this.randomItemInArray(typeList);
  }

  randomImage() {
    return this.randomItemInArray(imageList);
  }

  randomRating() {
    return this.randomBetween(1, 100) / 10;
  }
}
