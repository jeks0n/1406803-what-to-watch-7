import {createReducer} from '@reduxjs/toolkit';
import {
  getGenres,
  setCurrentGenre,
  changeMovieMyListStatus,
  resetCurrentMovie,
  resetMyMovies,
  resetSimilarMovies,
  loadMovies,
  loadPromoMovie,
  loadSimilarMovies,
  loadCurrentMovie,
  loadMyMovies,
  increaseNumberOfVisibleMovies,
  resetNumberOfVisibleMovies
} from './action';
import {
  ALL_GENRES,
  DEFAULT_NUMBER_OF_SIMILAR_MOVIES, DEFAULT_NUMBER_OF_VISIBLE_MOVIES,
  MAX_GENRES_TABS_COUNT
} from '../../const';
import {changeIsFavoriteStatus, getAllGenres} from '../../utils/movie';

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [],
  movies: [],
  similarMovies: [],
  myMovies: [],
  currentMovie: {},
  promoMovie: {},
  isMoviesLoaded: false,
  isCurrentMovieLoaded: false,
  isSimilarMoviesLoaded: false,
  isMyMoviesLoaded: false,
  numberOfVisibleMovies: DEFAULT_NUMBER_OF_VISIBLE_MOVIES,
};

const movies = createReducer(initialState, (builder) => {
  builder
    .addCase(getGenres, (state) => {
      state.genres = getAllGenres(state.movies, MAX_GENRES_TABS_COUNT);
    })
    .addCase(setCurrentGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(changeMovieMyListStatus, (state, action) => {
      state.currentMovie = changeIsFavoriteStatus(state.currentMovie, action.payload.id, action.payload.isFavorite);
      state.promoMovie = changeIsFavoriteStatus(state.promoMovie, action.payload.id, action.payload.isFavorite);
    })
    .addCase(resetCurrentMovie, (state) => {
      state.isCurrentMovieLoaded = false;
      state.currentMovie = {};
    })
    .addCase(resetMyMovies, (state) => {
      state.isMyMoviesLoaded = true;
      state.myMovies = [];
    })
    .addCase(resetSimilarMovies, (state) => {
      state.isSimilarMoviesLoaded = false;
      state.similarMovies = [];
    })
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
      state.initialMovies = action.payload;
      state.isMoviesLoaded = true;
    })
    .addCase(loadPromoMovie, (state, action) => {
      state.promoMovie = action.payload;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload.slice(0, DEFAULT_NUMBER_OF_SIMILAR_MOVIES);
      state.isSimilarMoviesLoaded = true;
    })
    .addCase(loadCurrentMovie, (state, action) => {
      state.currentMovie = action.payload;
      state.isCurrentMovieLoaded = true;
    })
    .addCase(loadMyMovies, (state, action) => {
      state.myMovies = action.payload;
      state.isMyMoviesLoaded = true;
    })
    .addCase(increaseNumberOfVisibleMovies, (state) => {
      state.numberOfVisibleMovies = state.movies.length > state.numberOfVisibleMovies + DEFAULT_NUMBER_OF_VISIBLE_MOVIES ?
        state.numberOfVisibleMovies + DEFAULT_NUMBER_OF_VISIBLE_MOVIES
        : state.movies.length;
    })
    .addCase(resetNumberOfVisibleMovies, (state) => {
      state.numberOfVisibleMovies = state.movies.length > DEFAULT_NUMBER_OF_VISIBLE_MOVIES ?
        DEFAULT_NUMBER_OF_VISIBLE_MOVIES : state.movies.length;
    });
});

export {movies};
