import axios from 'axios';
import API_URL  from './configuration';

export const updateUserData = (data) => {
  console.log(data)
  return axios({
    method: 'PATCH',
    url: `${API_URL}/User/update`,
    data:data,
  })
};