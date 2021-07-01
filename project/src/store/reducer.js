import {ALL_GENRES, MAX_GENRES_TABS_COUNT} from '../const';
import MOVIES from '../mocks/films';
import {ActionType} from './action';
import {getGenres} from '../utils/movie';

const initialState = {
  currentGenre: ALL_GENRES,
  genres: getGenres(MOVIES, MAX_GENRES_TABS_COUNT),
  movies: MOVIES,
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
    default:
      return state;
  }
};

export {reducer};
