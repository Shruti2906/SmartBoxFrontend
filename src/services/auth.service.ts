import axios from 'axios';
import { environment } from '../environments/environment';

const authService = axios.create({
  baseURL: environment.BASE_URL,
  headers: {
   // 'Content-Type': 'application/json',
    // Add any common headers or authentication tokens here
  },
});

export const login = async (credentials: { username: string; password: string }) => {
  try {
    const response = await authService.post('/login', credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to login');
  }
};

export const logout = async () => {
  try {
    const response = await authService.post('/logout');
    return response.data;
  } catch (error) {
    throw new Error((error as any).response?.data?.message || 'Failed to logout');
  }

};

