import axios from 'axios';
import API_URL  from './configuration';

export const draw = (uni,city,gender) => {
  const user = JSON.parse(localStorage.getItem("Lets_meeet"))
  return axios({
    method: 'GET',
    url: `${API_URL}/api/chat/draw?${uni?`isUniversity=${uni}${city||gender ? "&" :''}`:``}${city? `isCity=${city}${gender?"&":""}`:''}${gender?`gender=${gender}`:``}`,
    headers: {
      'Authorization': `Bearer ${user.token}`, 
      'Content-Type': 'application/json',
    },
  })
};