export const ActionType = {
  GET_GENRES: 'movies/getGenres',
  SET_GENRE_TO_FILTER: 'movies/setGenreToFilter',
  FILTER_MOVIES_BY_GENRE: 'movies/filterMoviesByGenre',
  INCREASE_NUMBER_OF_VISIBLE_MOVIES: 'movies/increaseNumberOfVisibleMovies',
  RESET_NUMBER_OF_VISIBLE_MOVIES: 'movies/resetNumberOfVisibleMovies',
  RESET_IS_CURRENT_MOVIE_LOADED: 'movies/resetIsCurrentMovieLoaded',
  RESET_CURRENT_MOVIE: 'movies/resetCurrentMovie',
  RESET_IS_SIMILAR_MOVIES_LOADED: 'movies/resetIsSimilarMoviesLoaded',
  RESET_SIMILAR_MOVIES: 'movies/resetSimilarMovies',
  RESET_CURRENT_MOVIE_COMMENTS: 'movies/resetCurrentMovieComments',
  RESET_IS_CURRENT_MOVIE_COMMENTS_LOADED: 'movies/resetIsCommentsLoaded',
  GET_CURRENT_MOVIE: 'movies/getCurrentMovie',
  TOGGLE_SHOW_MORE_BUTTON_VISIBILITY: 'movies/toggleShowMoreButtonVisibility',
  CHECK_SHOW_MORE_BUTTON_VISIBILITY: 'movies/checkShowMoreButtonVisibility',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_PROMO_MOVIE: 'data/loadPromoMovie',
  LOAD_SIMILAR_MOVIES: 'data/loadSimilarMovies',
  LOAD_CURRENT_MOVIE: 'data/loadCurrentMovie',
  LOAD_CURRENT_MOVIE_COMMENTS: 'data/loadCurrentMovieComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
  resetIsCurrentMovieLoaded: () => ({
    type: ActionType.RESET_IS_CURRENT_MOVIE_LOADED,
  }),
  resetCurrentMovie: () => ({
    type: ActionType.RESET_CURRENT_MOVIE,
  }),
  resetIsSimilarMoviesLoaded: () => ({
    type: ActionType.RESET_IS_SIMILAR_MOVIES_LOADED,
  }),
  resetSimilarMovies: () => ({
    type: ActionType.RESET_SIMILAR_MOVIES,
  }),
  resetCurrentMovieComments: () => ({
    type: ActionType.RESET_CURRENT_MOVIE_COMMENTS,
  }),
  resetIsCurrentMovieCommentsLoaded: () => ({
    type: ActionType.RESET_IS_CURRENT_MOVIE_COMMENTS_LOADED,
  }),
  toggleShowMoreButtonVisibility: () => ({
    type: ActionType.TOGGLE_SHOW_MORE_BUTTON_VISIBILITY,
  }),
  checkShowMoreButtonVisibility: () => ({
    type: ActionType.CHECK_SHOW_MORE_BUTTON_VISIBILITY,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  }),
  loadSimilarMovies: (movies) => ({
    type: ActionType.LOAD_SIMILAR_MOVIES,
    payload: movies,
  }),
  loadCurrentMovie: (movie) => ({
    type: ActionType.LOAD_CURRENT_MOVIE,
    payload: movie,
  }),
  loadCurrentMovieComments: (comments) => ({
    type: ActionType.LOAD_CURRENT_MOVIE_COMMENTS,
    payload: comments,
  }),
  getCurrentMovie: (id) => ({
    type: ActionType.GET_CURRENT_MOVIE,
    payload: id,
  }),
  getGenres: () => ({
    type: ActionType.GET_GENRES,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
