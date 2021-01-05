import axios from 'axios';

const api = axios.create({
  baseURL: 'https://setur-deploy.herokuapp.com/'
});

export default api;
