import {ActionCreator} from './action';
import {AuthorizationStatus, APIRouteCreator} from '../const';
import {Adapter} from './adapter';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getMovies())
    .then(({data}) => {
      const movies = data.map(Adapter.adaptMovieToClient);
      dispatch(ActionCreator.loadMovies(movies));
      dispatch(ActionCreator.getGenres(movies));
      dispatch(ActionCreator.checkShowMoreButtonVisibility());
    })
);

export const fetchSimilarMovies = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getSimilarMovies(movieId))
    .then(({data}) => {
      const movies = data.map(Adapter.adaptMovieToClient);
      dispatch(ActionCreator.loadSimilarMovies(movies));
    })
);

export const fetchCurrentMovie = (movieId) => (dispatch, getState, api) => (
  api.get(APIRouteCreator.getCurrentMovie(movieId))
    .then(({data}) => {
      const movie = Adapter.adaptMovieToClient(data);
      dispatch(ActionCreator.loadCurrentMovie(movie));
    })
);

export const fetchCurrentMovieComments = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getCurrentMovieComments(movieId))
    .then(({data}) => {
      const comments = data.map(Adapter.adaptCommentToClient);
      dispatch(ActionCreator.loadCurrentMovieComments(comments));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getPromoMovie())
    .then(({data}) => {
      const movie = Adapter.adaptMovieToClient(data);
      dispatch(ActionCreator.loadPromoMovie(movie));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.login())
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRouteCreator.login(), {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRouteCreator.logout())
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
