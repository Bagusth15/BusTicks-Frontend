const initialState = {
  listTerminal: [],
  isRejected: false,
  isFulfilled: false
};

//Insert initial state
const terminal = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TERMINAL_PENDING':
      return {
        ...state,
        isRejected: false,
        isFulfilled: false
      };

    case 'GET_TERMINAL_REJECTED':
      return {
        ...state,
        isRejected: true
      };

    case 'GET_TERMINAL_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        listTerminal: action.payload.data.data
      };

    default:
      return state;
  }
};

export default terminal;
