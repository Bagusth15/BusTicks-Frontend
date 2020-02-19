import { combineReducers } from 'redux';

import auth from '../../Auth/reducer';
import user from '../../App/Account/reducer';
import schedule from '../../App/Schedule/reducer';
import terminal from '../../App/Terminal/reducer';
import history from '../../App/History/reducer';
import booking from '../../App/Booking/reducer';

export default combineReducers({
  auth,
  user,
  schedule,
  terminal,
  history,
  booking
});
