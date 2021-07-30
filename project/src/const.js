export const APP_ROUTE_CREATOR = {
  getAddReview: (id = ':id') => `/films/${id}/review`,
  getFilm: (id = ':id') => `/films/${id}`,
  getMain: () => '/',
  getMyList: () => '/mylist',
  getPlayer: (id = ':id') => `/player/${id}`,
  getSignIn: () => '/login',
  getPageNotFound: () => '/page-not-found',
};

export const ALL_GENRES = 'All genres';
export const CANT_REACH_THE_SERVER = 'Can\'t reach the server';
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

export const API_ROUTE_CREATOR = {
  changeMovieMyListStatus: (id, status) => `/favorite/${id}/${status}`,
  getMovies: () => '/films',
  getPromoMovie: () => '/promo',
  getSimilarMovies: (id) => `/films/${id}/similar`,
  getMyMovies: () => '/favorite',
  getCurrentMovie: (id) => `/films/${id}`,
  getCurrentMovieComments: (id) => `/comments/${id}`,
  addComment: (id) => `/comments/${id}`,
  login: () => '/login',
  logout: () => '/logout',
};
