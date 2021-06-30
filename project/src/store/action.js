export const ActionType = {
  SET_GENRE_TO_FILTER: 'movies/setGenreToFilter',
  FILTER_MOVIES_BY_GENRE: 'movies/filterMoviesByGenre',
};

export const ActionCreator = {
  setGenreToFilter: (genre) => ({
    type: ActionType.SET_GENRE_TO_FILTER,
    payload: genre,
  }),
  filterMoviesByGenre: (genre) => ({
    type: ActionType.FILTER_MOVIES_BY_GENRE,
    payload: genre,
  }),
};
