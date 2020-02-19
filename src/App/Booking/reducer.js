const initialState = {
  data: []
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKING_FULFILLED':
      return {
        ...state
      };
    case 'ADD_BOOKING_FULFILLED':
      const fixdata = [...state.data, action.item];
      return {
        ...state,
        data: fixdata
      };

    case 'DELETE_BOOKING_FULFILLED':
      let delete_item = state.data.filter(
        item => action.item.no_identity !== item.no_identity
      );
      return {
        ...state,
        data: delete_item
      };
    default:
      return state;
  }
};

export default booking;
