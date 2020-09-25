export const LOGIN_USER = 'LOGIN_USER';
export function loginUser(credentials) {
  return {
    type: LOGIN_USER,
    payload: { credentials }
  }
};

export const LOGOUT_USER = 'LOGOUT_USER';
export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: { user }
  }
};

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginFailure(user) {
  return {
    type: LOGIN_FAILURE,
    payload: { user }
  }
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export function logoutSuccess(user) {
  return {
    type: LOGOUT_SUCCESS,
    payload: { user }
  }
};
