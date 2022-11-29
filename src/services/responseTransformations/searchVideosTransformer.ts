export const searchVideosTransformer = (data: any) => {
  return data.map((result) => ({
    id: result.show.id,
    name: result.show.name,
    genres: result.show.genres,
    language: result.show.language,
    image: result.show.image,
    summary: result.show.summary,
    type: result.show.type,
    rating: result.show.rating,
  }));
};
