export const Adapter = {
  adaptAuthentication: (authentication) => ({
    ...authentication,
    avatar: authentication.avatar_url,
  }),
  adaptCommentToClient: (comment) => ({
    ...comment,
    date: comment.date !== null
      ? new Date(comment.date)
      : comment.date,
  }),
  adaptMovieToClient: (movie) => ({
    id: movie.id,
    name: movie.name,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    videoLink: movie.video_link,
    previewVideoLink: movie.preview_video_link,
    description: movie.description,
    rating: movie.rating,
    scoresCount: movie.scores_count,
    director: movie.director,
    actors: movie.starring,
    runtime: movie.run_time,
    genre: movie.genre,
    released: movie.released,
    isFavorite: movie.is_favorite,
  }),
};
