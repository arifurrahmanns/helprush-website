import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://staging-api.helprush.in/api/v1',
    headers: { 'Accept': 'application/json' }
});

export default axiosInstance;