import axios from 'axios';
import { API_HOST } from 'react-native-dotenv';

export const getScheduled = config => {
  return {
    type: 'GET_SCHEDULE',
    payload: axios.get(`${API_HOST}/schedule`, config)
  };
};
