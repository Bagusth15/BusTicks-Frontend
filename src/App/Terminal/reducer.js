const initialState = {
  dataTerminal: [],
  isLoading: false
};

const getTerminal = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TERMINAL_PENDING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_TERMINAL_REJECT':
      return {
        ...state,
        isLoading: false
      };
    case 'GET_TERMINAL_FULFILLED':
      return {
        ...state,
        isLoading: false,
        dataTerminal: action.payload.data
      };
    default:
      return state;
  }
};

export default getTerminal;
