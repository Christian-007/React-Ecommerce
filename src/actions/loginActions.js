import axios from 'axios';

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:5000/api/login', userData);
  }
}