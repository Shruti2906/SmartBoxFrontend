import axios, { InternalAxiosRequestConfig } from 'axios';
import { environment } from '../environments/environment';
import storageService from '../services/storage.service';

const apiService = axios.create({
  baseURL: environment.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Other common headers can also be added here
  },
});

apiService.interceptors.request.use(
  
  (config: InternalAxiosRequestConfig) => {
    const authToken = storageService.getToken();
    console.log('authToken', authToken);
    const isRequestToBaseUrl = config.baseURL === environment.BASE_URL; 
    if (isRequestToBaseUrl && authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }
    console.log('authToken', authToken);
    return config;
    
  },
  (error) => {
    console.log('authToken err', error);
    return Promise.reject(error);
  }
);

export default apiService;
