import axios from 'axios';
import API_URL  from './configuration';

export const getUserData = (token) => {
  return axios({
    method: 'GET',
    url: `${API_URL}/User/info`,
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json',
    },
  })
};