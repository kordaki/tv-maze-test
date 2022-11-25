export const VideoListTransformer = (data: any) => {
  return data.map((videoItem: any) => ({
    id: videoItem._embedded.show.id,
    name: videoItem._embedded.show.name,
    genres: videoItem._embedded.show.genres,
    language: videoItem._embedded.show.language,
    image: videoItem._embedded.show.image,
    summary: videoItem._embedded.show.summary,
    type: videoItem._embedded.show.type,
    rating: videoItem._embedded.show.rating,
  }));
};
