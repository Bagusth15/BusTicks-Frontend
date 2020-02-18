import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';

const getUser = id => {
  return {
    type: 'GET_USER',
    payload: axios.get(`${API_HOST}/user/${id}`)
  };
};

export default getUser;
