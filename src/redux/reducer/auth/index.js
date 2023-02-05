import initialState from './initialState';
import types from '../../types';

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.FIREBASE_CONNECTED:
      return {
        ...state,
        ...initialState,
        isLoaded: true
      };
    /*case types.SET_ACCOUNT:
      return {
        ...state,
        ...action.payload,
      };*/
    case types.AUTH_SIGNIN:
      return {
        ...state,
        isLoaded: true,
        isEmpty: false,
        hasError: false,
        isLoggedIn: true,
        ...action.payload
      };
      case types.AUTH_SIGNOUT:
        return {
          ...state,
          isLoaded: true,
          isEmpty: true,
          hasError: false,
          isLoggedIn: false
        };
      case types.FIREBASE_ERROR:
        return {
          ...state,
          isLoaded: true,
          isEmpty: true,
          isLoggedIn: false,
          hasError: true,
          ...action.payload
        };/*
    case types.USERDATA_UPDATED:
      return { ...state,
        ...action.payload
      }*/
    default: return state;
  }
}