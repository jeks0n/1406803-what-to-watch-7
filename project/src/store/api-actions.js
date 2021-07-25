import {redirectToRoute} from './action';
import {AuthorizationStatus, APIRouteCreator, AppRouteCreator} from '../const';
import {Adapter} from './adapter';
import {
  changeMovieMyListStatus,
  getGenres,
  loadCurrentMovie,
  loadMovies,
  loadMyMovies, loadPromoMovie,
  loadSimilarMovies
} from './movies/action';
import {checkShowMoreButtonVisibility} from './movies/action';
import {
  loadCurrentMovieComments,
  resetIsWaitingServerResponseAddComment,
  setIsWaitingServerResponseAddComment, setServerResponseAddCommentError
} from './comments/action';
import {
  requireAuthorization,
  setServerAuthorizationError,
  setUserAvatar,
  setUserEmail,
  setUserName,
  logoutUser
} from './user/action';

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getMovies())
    .then(({data}) => {
      const movies = data.map(Adapter.adaptMovieToClient);
      dispatch(loadMovies(movies));
      dispatch(getGenres(movies));
      dispatch(checkShowMoreButtonVisibility());
    })
);

export const fetchSimilarMovies = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getSimilarMovies(movieId))
    .then(({data}) => {
      const movies = data.map(Adapter.adaptMovieToClient);
      dispatch(loadSimilarMovies(movies));
    })
);

export const fetchMyMovies = () => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getMyMovies())
    .then(({data}) => {
      const movies = data.map(Adapter.adaptMovieToClient);
      dispatch(loadMyMovies(movies));
    })
);

export const changeMovieMyMovieListStatus = ({id, isFavorite}) => (dispatch, _getState, api) => (
  api.post(APIRouteCreator.changeMovieMyListStatus(id, +!isFavorite))
    .then(() => {
      dispatch(changeMovieMyListStatus({id, isFavorite: !isFavorite}));
    })
);

export const fetchCurrentMovie = (movieId) => (dispatch, getState, api) => (
  api.get(APIRouteCreator.getCurrentMovie(movieId))
    .then(({data}) => {
      const movie = Adapter.adaptMovieToClient(data);
      dispatch(loadCurrentMovie(movie));
    })
    .catch(() => dispatch(redirectToRoute(AppRouteCreator.getPageNotFound())))
);

export const fetchCurrentMovieComments = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getCurrentMovieComments(movieId))
    .then(({data}) => {
      dispatch(loadCurrentMovieComments(data));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRouteCreator.getPromoMovie())
    .then(({data}) => {
      const movie = Adapter.adaptMovieToClient(data);
      dispatch(loadPromoMovie(movie));
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
      dispatch(setUserEmail(email));
      dispatch(setUserAvatar(avatar));
      dispatch(setUserName(name));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(setUserEmail(''));
      dispatch(setUserAvatar(''));
      dispatch(setUserName(''));
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
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
      dispatch(setUserAvatar(avatar));
      dispatch(setUserName(name));
      dispatch(setUserEmail(userEmail));
      localStorage.setItem('token', token);
      api.interceptors.request.use((config) => {
        config.headers['x-token'] = token;

        return config;
      });
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRouteCreator.getMain())))
    .catch((error) => {
      dispatch(setServerAuthorizationError(error.response.data.error));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRouteCreator.logout())
    .then(() => {
      dispatch(setUserEmail(''));
      dispatch(setUserAvatar(''));
      dispatch(setUserName(''));
      localStorage.removeItem('token');
    })
    .then(() => dispatch(logoutUser()))
);

export const addComment = (movieId, {rating, comment}) => (dispatch, _getState, api) => {
  dispatch(setIsWaitingServerResponseAddComment());

  return api.post(APIRouteCreator.addComment(movieId), {rating, comment})
    .then(() => {
      dispatch(resetIsWaitingServerResponseAddComment());
      dispatch(redirectToRoute(AppRouteCreator.getFilm(movieId)));
    })
    .catch((error) => {
      dispatch(resetIsWaitingServerResponseAddComment());
      dispatch(setServerResponseAddCommentError(error.response.data.error));
    });
};
