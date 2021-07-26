import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getServerResponseAuthorizationError = (state) => state[NameSpace.USER].serverResponseAuthorizationError;
export const getHasServerResponseAuthorizationError = (state) => state[NameSpace.USER].hasServerResponseAuthorizationError;
export const getUserAvatar = (state) => state[NameSpace.USER].userAvatar;
export const getUserEmail = (state) => state[NameSpace.USER].userEmail;
export const getUserName = (state) => state[NameSpace.USER].userName;
