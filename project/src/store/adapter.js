export const Adapter = {
  adaptMovieToClient: (movie) => ({
    ...movie,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    videoLink: movie.video_link,
    previewVideoLink: movie.preview_video_link,
    scoresCount: movie.scores_count,
    actors: movie.starring,
    runtime: movie.run_time,
    isFavorite: movie.is_favorite,
  }),
  adaptCommentToClient: (comment) => ({
    ...comment,
    date: comment.date !== null
      ? new Date(comment.date)
      : comment.date,
  }),
};
