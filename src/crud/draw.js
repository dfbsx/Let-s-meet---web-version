import axios from 'axios';
import API_URL  from './configuration';

export const draw = () => {
  const user = JSON.parse(localStorage.getItem("Lets_meeet"))
  return axios({
    method: 'GET',
    url: `${API_URL}/api/chat/draw`,
    headers: {
      'Authorization': `Bearer ${user.token}`, 
      'Content-Type': 'application/json',
    },
  })
};