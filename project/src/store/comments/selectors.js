import {NameSpace} from '../root-reducer';
import {Adapter} from '../adapter';

export const getCurrentMovieComments = (state) => state[NameSpace.COMMENTS].currentMovieComments.map(Adapter.adaptCommentToClient);
export const getIsCurrentMovieCommentsLoaded = (state) => state[NameSpace.COMMENTS].isCurrentMovieCommentsLoaded;
export const getServerResponseAddCommentError = (state) => state[NameSpace.COMMENTS].serverResponseAddCommentError;
export const getHasServerResponseAddCommentError = (state) => state[NameSpace.COMMENTS].hasServerResponseAddCommentError;
export const getIsWaitingServerResponseAddComment = (state) => state[NameSpace.COMMENTS].isWaitingServerResponseAddComment;
