import axios from 'axios';
import API_URL  from './configuration';

export const getUserDataFromNick = (userName) => {
  const user = JSON.parse(localStorage.getItem("Lets_meeet"))
    console.log("konsole log", `${API_URL}/User/${userName}`)
  return axios({
    method: 'GET',
    url: `${API_URL}/User/userName?userName=${userName}`,
    headers: {
      'Authorization': `Bearer ${user.token}`, 
      'Content-Type': 'application/json',
    },
  })
};