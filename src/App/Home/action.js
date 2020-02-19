import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';

export const getTerminal = () => {
  return {
    type: 'GET_TERMINAL',
    payload: axios.get(`${API_HOST}/terminal`)
  };
};
