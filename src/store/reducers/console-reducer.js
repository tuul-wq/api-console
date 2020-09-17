function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'XXX':
      return state.console
    default:
      return state.console;
  }
}

const initialState = {
  console: 1
};

export default reducer;
