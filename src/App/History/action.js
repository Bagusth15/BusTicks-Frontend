import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';

const historybooks = id => {
  return {
    type: 'GET_HISTORY',
    payload: axios.get(`${API_HOST}/booking/user/${id}`)
  };
};
export default historybooks;
