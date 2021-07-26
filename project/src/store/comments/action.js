import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_CURRENT_MOVIE_COMMENT: 'comments/addCurrentMovieComment',
  RESET_CURRENT_MOVIE_COMMENTS: 'comments/resetCurrentMovieComments',
  SET_SERVER_RESPONSE_ADD_COMMENT_ERROR: 'comments/setServerResponseAddCommentError',
  RESET_SERVER_RESPONSE_ADD_COMMENT_ERROR: 'comments/resetServerResponseAddCommentError',
  SET_IS_WAITING_SERVER_RESPONSE_ADD_COMMENT: 'comments/setIsWaitingServerResponseAddComment',
  RESET_IS_WAITING_SERVER_RESPONSE_ADD_COMMENT: 'comments/resetIsWaitingServerResponseAddComment',
  LOAD_CURRENT_MOVIE_COMMENTS: 'comments/loadCurrentMovieComments',
};

export const addComment = createAction(ActionType.ADD_CURRENT_MOVIE_COMMENT);

export const resetCurrentMovieComments = createAction(ActionType.RESET_CURRENT_MOVIE_COMMENTS);

export const loadCurrentMovieComments = createAction(ActionType.LOAD_CURRENT_MOVIE_COMMENTS, (comments) => ({
  payload: comments,
}));

export const setServerResponseAddCommentError = createAction(ActionType.SET_SERVER_RESPONSE_ADD_COMMENT_ERROR, (error) => ({
  payload: error,
}));

export const resetServerResponseAddCommentError = createAction(ActionType.RESET_SERVER_RESPONSE_ADD_COMMENT_ERROR);

export const setIsWaitingServerResponseAddComment = createAction(ActionType.SET_IS_WAITING_SERVER_RESPONSE_ADD_COMMENT);

export const resetIsWaitingServerResponseAddComment = createAction(ActionType.RESET_IS_WAITING_SERVER_RESPONSE_ADD_COMMENT);
