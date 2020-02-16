import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';

export const Regis = body => {
  return {
    type: 'POST_USER',
    payload: axios.post(`${API_HOST}/auth/register`, body)
  };
};
