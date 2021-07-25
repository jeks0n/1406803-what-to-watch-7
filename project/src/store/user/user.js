import {createReducer} from '@reduxjs/toolkit';
import {
  setUserAvatar,
  setUserEmail,
  setUserName,
  setServerAuthorizationError,
  resetServerAuthorizationError,
  requireAuthorization,
  logoutUser
} from './action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  serverResponseAuthorizationError: '',
  hasServerResponseAuthorizationError: false,
  userAvatar: '',
  userEmail: '',
  userName: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserAvatar, (state, action) => {
      state.userAvatar = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.userName = action.payload;
    })
    .addCase(setServerAuthorizationError, (state, action) => {
      state.hasServerResponseAuthorizationError = true;
      state.serverResponseAuthorizationError = action.payload;
    })
    .addCase(resetServerAuthorizationError, (state) => {
      state.hasServerResponseAuthorizationError = false;
      state.serverResponseAuthorizationError = '';
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logoutUser, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};
