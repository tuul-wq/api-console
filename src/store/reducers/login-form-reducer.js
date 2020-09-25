import { USER_FORM_UPDATED } from '../actions/login-form-action';

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case USER_FORM_UPDATED:
      return {
        ...state.loginForm,
        [payload.field]: payload.value
      };
    default:
      return state;
  }
}

const initialState = {
  loginForm: {
    login: '',
    sublogin: '',
    password: '',
    errorMessage: ''
  }
};

export default reducer;
