export const AppRoute = {
  ADD_REVIEW: '/films/:id/review',
  FILM: '/films/:id',
  MAIN: '/',
  MY_LIST: '/mylist',
  PLAYER: '/player/:id',
  SIGN_IN: '/login',
};

export const ALL_GENRES = 'All genres';
export const MAX_GENRES_TABS_COUNT = 10;
export const DEFAULT_NUMBER_OF_VISIBLE_MOVIES = 8;
export const DEFAULT_NUMBER_OF_SIMILAR_MOVIES = 4;

export const MovieTab = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRouteCreator = {
  changeMovieMyListStatus: (id, status) => `/favorite/${id}/${status}`,
  getMovies: () => '/films',
  getPromoMovie: () => '/promo',
  getSimilarMovies: (id) => `/films/${id}/similar`,
  getMyMovies: () => '/favorite',
  getFavoriteMovies: () => '/favorite',
  getCurrentMovie: (id) => `/films/${id}`,
  getCurrentMovieComments: (id) => `/comments/${id}`,
  login: () => '/login',
  logout: () => '/logout',
};
