function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'YYY':
      return state.user
    default:
      return state.user;
  }
}

const initialState = {
  user: 1
};

export default reducer;
