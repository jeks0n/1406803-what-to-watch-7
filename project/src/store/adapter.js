export const Adapter = {
  adaptMovieToClient: (movie) => {
    const newMovie = {
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
    };

    delete newMovie.poster_image;
    delete newMovie.preview_image;
    delete newMovie.background_image;
    delete newMovie.background_color;
    delete newMovie.video_link;
    delete newMovie.preview_video_link;
    delete newMovie.scores_count;
    delete newMovie.starring;
    delete newMovie.run_time;
    delete newMovie.is_favorite;

    return newMovie;
  },
  adaptCommentToClient: (comment) => ({
    ...comment,
    date: comment.date !== null
      ? new Date(comment.date)
      : comment.date,
  }),
};
