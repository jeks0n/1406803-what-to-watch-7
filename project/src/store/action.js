export const ActionType = {
  SET_GENRE_TO_FILTER: 'movies/setGenreToFilter',
  FILTER_MOVIES_BY_GENRE: 'movies/filterMoviesByGenre',
  INCREASE_NUMBER_OF_VISIBLE_MOVIES: 'movies/increaseNumberOfVisibleMovies',
  RESET_NUMBER_OF_VISIBLE_MOVIES: 'movies/resetNumberOfVisibleMovies',
  TOGGLE_SHOW_MORE_BUTTON_VISIBILITY: 'movies/toggleShowMoreButtonVisibility',
  CHECK_SHOW_MORE_BUTTON_VISIBILITY: 'movies/checkShowMoreButtonVisibility',
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
  increaseNumberOfVisibleMovies: () => ({
    type: ActionType.INCREASE_NUMBER_OF_VISIBLE_MOVIES,
  }),
  resetNumberOfVisibleMovies: () => ({
    type: ActionType.RESET_NUMBER_OF_VISIBLE_MOVIES,
  }),
  toggleShowMoreButtonVisibility: () => ({
    type: ActionType.TOGGLE_SHOW_MORE_BUTTON_VISIBILITY,
  }),
  checkShowMoreButtonVisibility: () => ({
    type: ActionType.CHECK_SHOW_MORE_BUTTON_VISIBILITY,
  }),
};
