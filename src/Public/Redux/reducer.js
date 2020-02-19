import { combineReducers } from 'redux';

import auth from '../../Auth/reducer';
import user from '../../App/Account/reducer';
import terminal from '../../App/Home/reducer';

export default combineReducers({
  auth,
  user,
  terminal
});
