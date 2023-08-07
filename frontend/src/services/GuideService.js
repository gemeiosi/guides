import axios from 'axios';

export function getGuides() {
  return axios.get('http://127.0.0.1:8000/guides/')
    .then(response => response.data)
}