import {
  LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS
} from '../actions/user-action';

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOGIN_SUCCESS:
      return state.user;
    case LOGIN_FAILURE:
      return state.user;
    case LOGOUT_SUCCESS:
      return state.user;
    default:
      return state;
  }
}

const initialState = {
  user: {
    email: 'vasya123@gmail.com',
    name: 'vasya'
  }
};

export default reducer;
