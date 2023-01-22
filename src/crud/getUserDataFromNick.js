import axios from 'axios';
import API_URL  from './configuration';

export const getUserDataFromNick = (userName) => {
    console.log("konsole log", `${API_URL}/User/${userName}`)
  return axios({
    method: 'GET',
    url: `${API_URL}/User/userName?userName=${userName}`,
  })
};