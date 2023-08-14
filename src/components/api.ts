import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://to-do-backend.azurewebsites.net/'
});

export default instance;
