import {ALL_GENRES, DEFAULT_NUMBER_OF_VISIBLE_MOVIES, MAX_GENRES_TABS_COUNT} from '../const';
import MOVIES from '../mocks/films';
import {ActionType} from './action';
import {getGenres} from '../utils/movie';

const initialState = {
  currentGenre: ALL_GENRES,
  genres: getGenres(MOVIES, MAX_GENRES_TABS_COUNT),
  movies: MOVIES,
  numberOfVisibleMovies: MOVIES.length > DEFAULT_NUMBER_OF_VISIBLE_MOVIES ? DEFAULT_NUMBER_OF_VISIBLE_MOVIES : MOVIES.length,
  isShowMoreButtonVisible: MOVIES.length > DEFAULT_NUMBER_OF_VISIBLE_MOVIES,
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
          movies: initialState.movies,
        }
        : {
          ...state,
          movies: initialState.movies.filter((movie) => movie.genre === state.currentGenre),
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
    default:
      return state;
  }
};

export {reducer};
