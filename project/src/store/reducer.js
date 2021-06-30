import {ALL_GENRES} from '../const';
import MOVIES from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  filteredGenre: ALL_GENRES,
  filteredMovies: MOVIES,
  movies: MOVIES,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE_TO_FILTER:
      return {
        ...state,
        filteredGenre: action.payload,
      };
    case ActionType.FILTER_MOVIES_BY_GENRE:
      return action.payload === ALL_GENRES ?
        {
          ...state,
          filteredMovies: state.movies,
        }
        : {
          ...state,
          filteredMovies: state.movies.filter((movie) => movie.genre === state.filteredGenre),
        };
    default:
      return state;
  }
};

export {reducer};
