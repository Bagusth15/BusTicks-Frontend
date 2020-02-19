const initialState = {
  data: [],
  isLoading: false
};

const historybook = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HISTORY_PENDING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_HISTORY_REJECT':
      return {
        ...state,
        isLoading: false
      };
    case 'GET_HISTORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case 'HISTORY_EMPTY':
      return {
        ...state,
        isLoading: false,
        data: []
      };
    default:
      return state;
  }
};

export default historybook;
