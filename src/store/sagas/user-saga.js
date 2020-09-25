import { loginFailure, loginSuccess, LOGIN_USER, logoutSuccess } from '../actions/user-action';
import { takeEvery } from 'redux-saga/effects';

// export const userLogout = (service) => () =>
// async (dispatch) => {
//   const res = await service.logout();
//   dispatch(logoutSuccess(res));
// }

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, workerLoginUser);
}

function* workerLoginUser() {
  console.log(123);
  // try {
  //   const res = await service.login(data);
  //   dispatch(loginSuccess(res));
  // } catch (error) {
  //   dispatch(loginFailure(error));
  // }
}
