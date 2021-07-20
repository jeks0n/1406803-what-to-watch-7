export const ActionType = {
  CHANGE_MOVIE_MY_LIST_STATUS: 'movies/changeMyListStatus',
  GET_GENRES: 'movies/getGenres',
  SET_CURRENT_GENRE: 'movies/setCurrentGenre',
  SET_USER_AVATAR: 'user/setAvatar',
  SET_USER_EMAIL: 'user/setEmail',
  SET_USER_NAME: 'user/setName',
  FILTER_MOVIES_BY_GENRE: 'movies/filterMoviesByGenre',
  INCREASE_NUMBER_OF_VISIBLE_MOVIES: 'movies/increaseNumberOfVisibleMovies',
  RESET_NUMBER_OF_VISIBLE_MOVIES: 'movies/resetNumberOfVisibleMovies',
  RESET_IS_CURRENT_MOVIE_LOADED: 'movies/resetIsCurrentMovieLoaded',
  RESET_CURRENT_MOVIE: 'movies/resetCurrentMovie',
  RESET_IS_SIMILAR_MOVIES_LOADED: 'movies/resetIsSimilarMoviesLoaded',
  RESET_MY_MOVIES: 'movies/resetMyMovies',
  RESET_IS_MY_MOVIES_LOADED: 'movies/resetIsMyMoviesLoaded',
  RESET_SIMILAR_MOVIES: 'movies/resetSimilarMovies',
  ADD_CURRENT_MOVIE_COMMENT: 'movies/addCurrentMovieComment',
  RESET_CURRENT_MOVIE_COMMENTS: 'movies/resetCurrentMovieComments',
  RESET_IS_CURRENT_MOVIE_COMMENTS_LOADED: 'movies/resetIsCurrentMovieCommentsLoaded',
  SET_SERVER_AUTHORIZATION_ERROR: 'data/setServerAuthorizationError',
  RESET_SERVER_AUTHORIZATION_ERROR: 'data/resetServerAuthorizationError',
  SET_HAS_SERVER_AUTHORIZATION_ERROR: 'data/setHasServerAuthorizationError',
  RESET_HAS_SERVER_AUTHORIZATION_ERROR: 'data/resetHasServerAuthorizationError',
  SET_SERVER_RESPONSE_ADD_COMMENT_ERROR: 'data/setServerResponseAddCommentError',
  RESET_SERVER_RESPONSE_ADD_COMMENT_ERROR: 'data/resetServerResponseAddCommentError',
  SET_HAS_SERVER_RESPONSE_ADD_COMMENT_ERROR: 'data/setHasServerResponseAddCommentError',
  RESET_HAS_SERVER_RESPONSE_ADD_COMMENT_ERROR: 'data/resetHasServerResponseAddCommentError',
  SET_IS_WAITING_SERVER_RESPONSE_ADD_COMMENT: 'data/setIsWaitingServerResponseAddComment',
  TOGGLE_SHOW_MORE_BUTTON_VISIBILITY: 'movies/toggleShowMoreButtonVisibility',
  CHECK_SHOW_MORE_BUTTON_VISIBILITY: 'movies/checkShowMoreButtonVisibility',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_PROMO_MOVIE: 'data/loadPromoMovie',
  LOAD_SIMILAR_MOVIES: 'data/loadSimilarMovies',
  LOAD_CURRENT_MOVIE: 'data/loadCurrentMovie',
  LOAD_CURRENT_MOVIE_COMMENTS: 'data/loadCurrentMovieComments',
  LOAD_MY_MOVIES: 'data/loadMyMovies',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'movies/redirectToRoute',
};

export const ActionCreator = {
  addComment: () => ({
    type: ActionType.ADD_CURRENT_MOVIE_COMMENT,
  }),
  setCurrentGenre: (genre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  }),
  setUserAvatar: (avatar) => ({
    type: ActionType.SET_USER_AVATAR,
    payload: avatar,
  }),
  setUserEmail: (email) => ({
    type: ActionType.SET_USER_EMAIL,
    payload: email,
  }),
  setUserName: (name) => ({
    type: ActionType.SET_USER_NAME,
    payload: name,
  }),
  filterMoviesByGenre: (genre) => ({
    type: ActionType.FILTER_MOVIES_BY_GENRE,
    payload: genre,
  }),
  increaseNumberOfVisibleMovies: () => ({
    type: ActionType.INCREASE_NUMBER_OF_VISIBLE_MOVIES,
  }),
  resetNumberOfVisibleMovies: () => ({
    type: ActionType.RESET_NUMBER_OF_VISIBLE_MOVIES,
  }),
  resetIsCurrentMovieLoaded: () => ({
    type: ActionType.RESET_IS_CURRENT_MOVIE_LOADED,
  }),
  resetCurrentMovie: () => ({
    type: ActionType.RESET_CURRENT_MOVIE,
  }),
  resetIsSimilarMoviesLoaded: () => ({
    type: ActionType.RESET_IS_SIMILAR_MOVIES_LOADED,
  }),
  resetMyMovies: () => ({
    type: ActionType.RESET_MY_MOVIES,
  }),
  resetIsMyMoviesLoaded: () => ({
    type: ActionType.RESET_IS_MY_MOVIES_LOADED,
  }),
  resetSimilarMovies: () => ({
    type: ActionType.RESET_SIMILAR_MOVIES,
  }),
  resetCurrentMovieComments: () => ({
    type: ActionType.RESET_CURRENT_MOVIE_COMMENTS,
  }),
  resetIsCurrentMovieCommentsLoaded: () => ({
    type: ActionType.RESET_IS_CURRENT_MOVIE_COMMENTS_LOADED,
  }),
  toggleShowMoreButtonVisibility: () => ({
    type: ActionType.TOGGLE_SHOW_MORE_BUTTON_VISIBILITY,
  }),
  checkShowMoreButtonVisibility: () => ({
    type: ActionType.CHECK_SHOW_MORE_BUTTON_VISIBILITY,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  }),
  loadSimilarMovies: (movies) => ({
    type: ActionType.LOAD_SIMILAR_MOVIES,
    payload: movies,
  }),
  loadMyMovies: (movies) => ({
    type: ActionType.LOAD_MY_MOVIES,
    payload: movies,
  }),
  changeMovieMyListStatus: (status) => ({
    type: ActionType.CHANGE_MOVIE_MY_LIST_STATUS,
    payload: status,
  }),
  loadCurrentMovie: (movie) => ({
    type: ActionType.LOAD_CURRENT_MOVIE,
    payload: movie,
  }),
  loadCurrentMovieComments: (comments) => ({
    type: ActionType.LOAD_CURRENT_MOVIE_COMMENTS,
    payload: comments,
  }),
  setServerAuthorizationError: (error) => ({
    type: ActionType.SET_SERVER_AUTHORIZATION_ERROR,
    payload: error,
  }),
  setHasServerAuthorizationError: (status) => ({
    type: ActionType.SET_HAS_SERVER_AUTHORIZATION_ERROR,
    payload: status,
  }),
  resetServerAuthorizationError: (error) => ({
    type: ActionType.RESET_SERVER_AUTHORIZATION_ERROR,
  }),
  resetHasServerAuthorizationError: () => ({
    type: ActionType.RESET_HAS_SERVER_AUTHORIZATION_ERROR,
  }),
  setServerResponseAddCommentError: (error) => ({
    type: ActionType.SET_SERVER_RESPONSE_ADD_COMMENT_ERROR,
    payload: error,
  }),
  resetServerResponseAddCommentError: () => ({
    type: ActionType.RESET_SERVER_RESPONSE_ADD_COMMENT_ERROR,
  }),
  setHasServerResponseAddCommentError: (status) => ({
    type: ActionType.SET_HAS_SERVER_RESPONSE_ADD_COMMENT_ERROR,
    payload: status,
  }),
  resetHasServerResponseAddCommentError: () => ({
    type: ActionType.RESET_HAS_SERVER_RESPONSE_ADD_COMMENT_ERROR,
  }),
  setIsWaitingServerResponseAddComment: (status) => ({
    type: ActionType.SET_IS_WAITING_SERVER_RESPONSE_ADD_COMMENT,
    payload: status,
  }),
  getGenres: () => ({
    type: ActionType.GET_GENRES,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
