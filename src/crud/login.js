import axios from 'axios';
import API_URL  from './configuration';

export const login = (login, password) => {
  console.log(login,password)
  return axios({
    method: 'POST',
    url: `${API_URL}/login`,
    data:{ "login" : login, "password": password },
  })
};