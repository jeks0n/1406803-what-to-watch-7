import {NameSpace} from '../root-reducer';

export const getCurrentGenre = (state) => state[NameSpace.MOVIES].currentGenre;
export const getGenres = (state) => state[NameSpace.MOVIES].genres;
export const getMovies = (state) => state[NameSpace.MOVIES].movies;
export const getInitialMovies = (state) => state[NameSpace.MOVIES].initialMovies;
export const getSimilarMovies = (state) => state[NameSpace.MOVIES].similarMovies;
export const getMyMovies = (state) => state[NameSpace.MOVIES].myMovies;
export const getCurrentMovie = (state) => state[NameSpace.MOVIES].currentMovie;
export const getPromoMovie = (state) => state[NameSpace.MOVIES].promoMovie;
export const getIsMoviesLoaded = (state) => state[NameSpace.MOVIES].isMoviesLoaded;
export const getIsCurrentMovieLoaded = (state) => state[NameSpace.MOVIES].isCurrentMovieLoaded;
export const getIsSimilarMoviesLoaded = (state) => state[NameSpace.MOVIES].isSimilarMoviesLoaded;
export const getIsMyMoviesLoaded = (state) => state[NameSpace.MOVIES].isMyMoviesLoaded;
export const getNumberOfVisibleMovies = (state) => state[NameSpace.MOVIES].numberOfVisibleMovies;
export const getIsShowMoreButtonVisible = (state) => state[NameSpace.MOVIES].isShowMoreButtonVisible;
