import {ActionCreator} from './action';
import {AuthorizationStatus, APIRouteCreator, AppRouteCreator} from '../const';
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
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRouteCreator.getPageNotFound())))
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
      const {
        avatar,
        email,
        name,
      } = Adapter.adaptAuthentication(data);
      dispatch(ActionCreator.setUserEmail(email));
      dispatch(ActionCreator.setUserAvatar(avatar));
      dispatch(ActionCreator.setUserName(name));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(ActionCreator.setUserEmail(''));
      dispatch(ActionCreator.setUserAvatar(''));
      dispatch(ActionCreator.setUserName(''));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRouteCreator.login(), {email, password})
    .then(({data}) => {
      const {
        avatar,
        name,
        email: userEmail,
        token,
      } = Adapter.adaptAuthentication(data);
      dispatch(ActionCreator.setUserAvatar(avatar));
      dispatch(ActionCreator.setUserName(name));
      dispatch(ActionCreator.setUserEmail(userEmail));
      localStorage.setItem('token', token);
      api.interceptors.request.use((config) => {
        config.headers['x-token'] = token;

        return config;
      });
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRouteCreator.getMain())))
    .catch((error) => {
      dispatch(ActionCreator.setHasServerAuthorizationError(true));
      dispatch(ActionCreator.setServerAuthorizationError(error.response.data.error));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRouteCreator.logout())
    .then(() => {
      dispatch(ActionCreator.setUserEmail(''));
      dispatch(ActionCreator.setUserAvatar(''));
      dispatch(ActionCreator.setUserName(''));
      localStorage.removeItem('token');
    })
    .then(() => dispatch(ActionCreator.logout()))
);

export const addComment = (movieId, {rating, comment}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setIsWaitingServerResponseAddComment(true));

  return api.post(APIRouteCreator.addComment(movieId), {rating, comment})
    .then(() => {
      dispatch(ActionCreator.setIsWaitingServerResponseAddComment(false));
      dispatch(ActionCreator.redirectToRoute(AppRouteCreator.getFilm(movieId)));
    })
    .catch((error) => {
      dispatch(ActionCreator.setIsWaitingServerResponseAddComment(false));
      dispatch(ActionCreator.setHasServerResponseAddCommentError(true));
      dispatch(ActionCreator.setServerResponseAddCommentError(error.response.data.error));
    });
};
