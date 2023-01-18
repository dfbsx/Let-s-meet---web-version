import axios from 'axios';
import API_URL  from './configuration';

export const getUserData = () => {
  return axios({
    method: 'GET',
    url: `${API_URL}/User/info`,
  })
};