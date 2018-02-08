import axios from 'axios';

export function uploadPhoto(userData, config) {
  return dispatch => {
    return axios.post('http://localhost:5000/api/fileUpload', userData, config);
  }
}

export function getPhotoCollections() {
  return dispatch => {
    return axios.get('http://localhost:5000/api/photo');
  }
}
