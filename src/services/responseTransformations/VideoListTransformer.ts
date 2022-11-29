export const videoListTransformer = (data: any) => {
  return data.reduce((obj, dataItem) => {
    const id = dataItem._embedded.show.id;
    obj[id] = {
      id: dataItem._embedded.show.id,
      name: dataItem._embedded.show.name,
      genres: dataItem._embedded.show.genres,
      language: dataItem._embedded.show.language,
      image: dataItem._embedded.show.image,
      summary: dataItem._embedded.show.summary,
      type: dataItem._embedded.show.type,
      rating: dataItem._embedded.show.rating,
    };
    return obj;
  }, {});
};
