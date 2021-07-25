import {ALL_GENRES} from '../const';

export const getAllGenres = (movies, maxCount) => (
  [ALL_GENRES,
    ...([...new Set(movies.map((movie) => movie.genre))]
      .sort((genreA, genreB) => genreA.localeCompare(genreB))),
  ].slice(0, maxCount));

export const changeIsFavoriteStatus = (movie, idMovieChanged, newIsFavorite) => {
  if (movie.id !== idMovieChanged) {
    return movie;
  }

  return {
    ...movie,
    isFavorite: newIsFavorite,
  };
};
