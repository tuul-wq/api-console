function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'XXX':
      return state.console
    default:
      return state.console;
  }
}

const historyTracksMOCK = [
  { id: 0, title: 'track.get', success: true },
  { id: 1, title: 'issue.send', success: false },
  { id: 2, title: 'pong', success: true },
  { id: 3, title: 'trach.get', success: true },
  { id: 4, title: 'sta.uni', success: false },
  { id: 5, title: 'trach.get', success: true },
  { id: 6, title: 'sta.uni', success: false },
  { id: 7, title: 'trach.get', success: true },
  { id: 8, title: 'sta.uni', success: false },
  { id: 9, title: 'trach.get', success: true },
  { id: 10, title: 'sta.uni', success: false },
  { id: 11, title: 'trach.get', success: true },
  { id: 12, title: 'sta.uni', success: false }
];

const initialState = {
  // historyTracks: []
  console: {
    historyTracks: historyTracksMOCK
  }
};

export default reducer;

