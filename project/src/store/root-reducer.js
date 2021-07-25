import {combineReducers} from 'redux';
import {comments} from './comments/comments';
import {movies} from './movies/movies';
import {user} from './user/user';

export const NameSpace = {
  COMMENTS: 'COMMENTS',
  MOVIES: 'MOVIES',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.COMMENTS]: comments,
  [NameSpace.MOVIES]: movies,
  [NameSpace.USER]: user,
});
