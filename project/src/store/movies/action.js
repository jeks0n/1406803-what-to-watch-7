import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  GET_GENRES: 'movies/getGenres',
  SET_CURRENT_GENRE: 'movies/setCurrentGenre',
  FILTER_MOVIES_BY_GENRE: 'movies/filterMoviesByGenre',
  CHANGE_MOVIE_MY_LIST_STATUS: 'movies/changeMyListStatus',
  RESET_CURRENT_MOVIE: 'movies/resetCurrentMovie',
  RESET_MY_MOVIES: 'movies/resetMyMovies',
  RESET_SIMILAR_MOVIES: 'movies/resetSimilarMovies',
  LOAD_MOVIES: 'movies/loadMovies',
  LOAD_PROMO_MOVIE: 'movies/loadPromoMovie',
  LOAD_SIMILAR_MOVIES: 'movies/loadSimilarMovies',
  LOAD_CURRENT_MOVIE: 'movies/loadCurrentMovie',
  LOAD_MY_MOVIES: 'movies/loadMyMovies',
  INCREASE_NUMBER_OF_VISIBLE_MOVIES: 'movies/increaseNumberOfVisibleMovies',
  RESET_NUMBER_OF_VISIBLE_MOVIES: 'movies/resetNumberOfVisibleMovies',
};

export const getGenres = createAction(ActionType.GET_GENRES);

export const setCurrentGenre = createAction(ActionType.SET_CURRENT_GENRE, (genre) => ({
  payload: genre,
}));

export const changeMovieMyListStatus = createAction(ActionType.CHANGE_MOVIE_MY_LIST_STATUS, (status) => ({
  payload: status,
}));

export const resetCurrentMovie = createAction(ActionType.RESET_CURRENT_MOVIE);

export const resetMyMovies = createAction(ActionType.RESET_MY_MOVIES);

export const resetSimilarMovies = createAction(ActionType.RESET_SIMILAR_MOVIES);

export const loadMovies = createAction(ActionType.LOAD_MOVIES, (movies) => ({
  payload: movies,
}));

export const loadPromoMovie = createAction(ActionType.LOAD_PROMO_MOVIE, (movie) => ({
  payload: movie,
}));

export const loadSimilarMovies = createAction(ActionType.LOAD_SIMILAR_MOVIES, (movies) => ({
  payload: movies,
}));

export const loadCurrentMovie = createAction(ActionType.LOAD_CURRENT_MOVIE, (movie) => ({
  payload: movie,
}));

export const loadMyMovies = createAction(ActionType.LOAD_MY_MOVIES, (movies) => ({
  payload: movies,
}));

export const increaseNumberOfVisibleMovies = createAction(ActionType.INCREASE_NUMBER_OF_VISIBLE_MOVIES);

export const resetNumberOfVisibleMovies = createAction(ActionType.RESET_NUMBER_OF_VISIBLE_MOVIES);
