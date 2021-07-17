import {ActionCreator} from './action';
import {AuthorizationStatus, APIRouteCreator, AppRoute} from '../const';
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

export const fetchMyMovies = () => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getMyMovies())
    .then(({data}) => {
      const movies = data.map(Adapter.adaptMovieToClient);
      dispatch(ActionCreator.loadMyMovies(movies));
    })
);

export const changeMovieMyMovieListStatus = ({id, isFavorite}) => (dispatch, _getState, api) => (
  api.post(APIRouteCreator.changeMovieMyListStatus(id, +!isFavorite))
    .then(() => {
      dispatch(ActionCreator.changeMovieMyListStatus({id, isFavorite: !isFavorite}));
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
    .then(({data}) => {
      dispatch(ActionCreator.setUserEmail(data.email));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(ActionCreator.setUserEmail(''));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRouteCreator.login(), {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUserEmail(data.email));
      localStorage.setItem('token', data.token);
      api.interceptors.request.use((config) => {
        config.headers['x-token'] = data.token;

        return config;
      });
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch((error) => {
      dispatch(ActionCreator.setHasServerAuthorizationError(true));
      dispatch(ActionCreator.setServerAuthorizationError(error.response.data.error));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRouteCreator.logout())
    .then(() => {
      dispatch(ActionCreator.setUserEmail(''));
      localStorage.removeItem('token');
    })
    .then(() => dispatch(ActionCreator.logout()))
);
