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
    const randomNumber = this.randomBetween(0, data.length - 1);
    return data[randomNumber];
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
    const newGenreList: Array<string> = [];
    for (let i = 0; i < possibleCounts; i++) {
      newGenreList.push(this.randomItemInArray(genreList));
    }
    return [...new Set(newGenreList)];
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
