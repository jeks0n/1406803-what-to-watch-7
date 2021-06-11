const appRoot = {
  getAddPreview(id = ':id') {
    return `/films/${id}/review`;
  },
  getFilm(id = ':id') {
    return `/films/${id}`;
  },
  getMain() {
    return '/';
  },
  getMyList() {
    return '/mylist';
  },
  getPlayer(id = ':id') {
    return `/player/${id}`;
  },
  getSignIn() {
    return '/login';
  },
};

export default appRoot;
