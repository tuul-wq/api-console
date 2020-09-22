function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'YYY':
      return state.user
    default:
      return state.user;
  }
}

const initialState = {
  user: {
    email: 'vasya123@gmail.com',
    name: 'vasya'
  }
};

export default reducer;
