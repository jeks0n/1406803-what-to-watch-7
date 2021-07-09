import {
  ALL_GENRES,
  AuthorizationStatus,
  DEFAULT_NUMBER_OF_SIMILAR_MOVIES,
  DEFAULT_NUMBER_OF_VISIBLE_MOVIES,
  MAX_GENRES_TABS_COUNT
} from '../const';
import {ActionType} from './action';
import {getGenres} from '../utils/movie';

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [],
  movies: [],
  initialMovies: [],
  similarMovies: [],
  currentMovie: {},
  currentMovieComments: [],
  promoMovie: {},
  numberOfVisibleMovies: DEFAULT_NUMBER_OF_VISIBLE_MOVIES,
  isShowMoreButtonVisible: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isMoviesLoaded: false,
  isCurrentMovieLoaded: false,
  isCurrentMovieCommentsLoaded: false,
  isSimilarMoviesLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE_TO_FILTER:
      return {
        ...state,
        currentGenre: action.payload,
      };
    case ActionType.FILTER_MOVIES_BY_GENRE:
      return action.payload === ALL_GENRES ?
        {
          ...state,
          movies: state.initialMovies,
        }
        : {
          ...state,
          movies: state.initialMovies.filter((movie) => movie.genre === state.currentGenre),
        };
    case ActionType.INCREASE_NUMBER_OF_VISIBLE_MOVIES:
      return {
        ...state,
        numberOfVisibleMovies: state.movies.length > state.numberOfVisibleMovies + DEFAULT_NUMBER_OF_VISIBLE_MOVIES ?
          state.numberOfVisibleMovies + DEFAULT_NUMBER_OF_VISIBLE_MOVIES
          : state.movies.length,
      };
    case ActionType.RESET_NUMBER_OF_VISIBLE_MOVIES:
      return {
        ...state,
        numberOfVisibleMovies: state.movies.length > DEFAULT_NUMBER_OF_VISIBLE_MOVIES ? DEFAULT_NUMBER_OF_VISIBLE_MOVIES : state.movies.length,
      };
    case ActionType.RESET_IS_CURRENT_MOVIE_LOADED:
      return {
        ...state,
        isCurrentMovieLoaded: false,
      };
    case ActionType.RESET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: {},
      };
    case ActionType.RESET_IS_SIMILAR_MOVIES_LOADED:
      return {
        ...state,
        isSimilarMoviesLoaded: false,
      };
    case ActionType.RESET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: [],
      };
    case ActionType.RESET_CURRENT_MOVIE_COMMENTS:
      return {
        ...state,
        currentMovieComments: [],
      };
    case ActionType.RESET_IS_CURRENT_MOVIE_COMMENTS_LOADED:
      return {
        ...state,
        isCurrentMovieCommentsLoaded: false,
      };
    case ActionType.TOGGLE_SHOW_MORE_BUTTON_VISIBILITY:
      return {
        ...state,
        isShowMoreButtonVisible: !state.isShowMoreButtonVisible,
      };
    case ActionType.CHECK_SHOW_MORE_BUTTON_VISIBILITY:
      return {
        ...state,
        isShowMoreButtonVisible: state.movies.length > state.numberOfVisibleMovies,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        initialMovies: action.payload,
        isMoviesLoaded: true,
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload,
      };
    case ActionType.LOAD_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload.slice(0, DEFAULT_NUMBER_OF_SIMILAR_MOVIES),
        isSimilarMoviesLoaded: true,
      };
    case ActionType.LOAD_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
        isCurrentMovieLoaded: true,
      };
    case ActionType.LOAD_CURRENT_MOVIE_COMMENTS:
      return {
        ...state,
        currentMovieComments: action.payload,
        isCurrentMovieCommentsLoaded: true,
      };
    case ActionType.GET_GENRES:
      return {
        ...state,
        genres: getGenres(state.movies, MAX_GENRES_TABS_COUNT),
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
