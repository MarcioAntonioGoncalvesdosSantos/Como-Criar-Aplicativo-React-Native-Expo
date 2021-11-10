import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.166:8080'
    /*baseURL: 'http://localhost:8080'*/
});

export default api;