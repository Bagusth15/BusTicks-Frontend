const initialState = {
  data: [],
  isLoading: false
};

const getSchedule = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCHEDULE_PENDING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_SCHEDULE_REJECT':
      return {
        ...state,
        isLoading: false
      };
    case 'GET_SCHEDULE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    default:
      return state;
  }
};

export default getSchedule;
