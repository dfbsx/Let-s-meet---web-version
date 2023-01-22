import axios from 'axios';
import API_URL  from './configuration';

export const draw = () => {
  return axios({
    method: 'GET',
    url: `${API_URL}/api/chat/draw`,
  })
};