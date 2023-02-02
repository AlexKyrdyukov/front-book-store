import axios, { AxiosError } from 'axios';
import cookies from '../utils/coookieHelper';
import authApi from './authApi';
import getDeviceId from '../utils/deviceHelper';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    device_id: getDeviceId(),
  },
});
axiosInstance.interceptors.request.use((request) => {
  const accessToken = cookies.access.get();
  if (accessToken) {
    const customRequest = request;
    customRequest.headers!.authorization = `Bearer ${accessToken}`;
  }
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  try {
    const originalRequest = error.config;
    if (error instanceof AxiosError &&
      error.response?.status === 401 &&
      originalRequest.url !== '/auth/refresh'
    ) {
      const oldRefreshToken = cookies.refresh.get();
      const response = await authApi.refresh(`Bearer ${oldRefreshToken}`);
      const { accessToken, refreshToken } = response;
      cookies.access.set(accessToken);
      cookies.refresh.set(refreshToken);
      if (originalRequest) {
        const req = await axiosInstance.request(originalRequest);
        return req;
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
  throw error;
});

export default axiosInstance;
