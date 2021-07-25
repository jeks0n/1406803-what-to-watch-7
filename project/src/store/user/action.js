import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_USER_AVATAR: 'user/setAvatar',
  SET_USER_EMAIL: 'user/setEmail',
  SET_USER_NAME: 'user/setName',
  SET_SERVER_AUTHORIZATION_ERROR: 'user/setServerAuthorizationError',
  RESET_SERVER_AUTHORIZATION_ERROR: 'user/resetServerAuthorizationError',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const setUserAvatar = createAction(ActionType.SET_USER_AVATAR, (avatar) => ({
  payload: avatar,
}));

export const setUserEmail = createAction(ActionType.SET_USER_EMAIL, (email) => ({
  payload: email,
}));

export const setUserName = createAction(ActionType.SET_USER_NAME, (name) => ({
  payload: name,
}));

export const setServerAuthorizationError = createAction(ActionType.SET_SERVER_AUTHORIZATION_ERROR, (error) => ({
  payload: error,
}));

export const resetServerAuthorizationError = createAction(ActionType.RESET_SERVER_AUTHORIZATION_ERROR);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logoutUser = createAction(ActionType.LOGOUT);
