import {createReducer} from '@reduxjs/toolkit';
import {
  resetCurrentMovieComments,
  loadCurrentMovieComments,
  setServerResponseAddCommentError,
  resetServerResponseAddCommentError,
  setIsWaitingServerResponseAddComment,
  resetIsWaitingServerResponseAddComment
} from './action';

const initialState = {
  currentMovieComments: [],
  isCurrentMovieCommentsLoaded: false,
  serverResponseAddCommentError: '',
  hasServerResponseAddCommentError: false,
  isWaitingServerResponseAddComment: false,
};

const comments = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCurrentMovieComments, (state) => {
      state.currentMovieComments = [];
      state.isCurrentMovieCommentsLoaded = false;
    })
    .addCase(loadCurrentMovieComments, (state, action) => {
      state.currentMovieComments = action.payload;
      state.isCurrentMovieCommentsLoaded = true;
    })
    .addCase(setServerResponseAddCommentError, (state, action) => {
      state.serverResponseAddCommentError = action.payload;
      state.hasServerResponseAddCommentError = true;
    })
    .addCase(resetServerResponseAddCommentError, (state) => {
      state.serverResponseAddCommentError = '';
      state.hasServerResponseAddCommentError = false;
    })
    .addCase(setIsWaitingServerResponseAddComment, (state) => {
      state.isWaitingServerResponseAddComment = true;
    })
    .addCase(resetIsWaitingServerResponseAddComment, (state) => {
      state.isWaitingServerResponseAddComment = false;
    });
});

export {comments};
