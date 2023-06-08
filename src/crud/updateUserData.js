import axios from 'axios';
import API_URL  from './configuration';
import { TOKEN } from '../store/actions';

export const updateUserData = (data,token) => {
  return axios({
    method: 'PATCH',
    url: `${API_URL}/User/update`,
    data:data,
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json',
    },
  })
};