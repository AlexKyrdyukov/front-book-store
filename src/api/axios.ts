import axios, { AxiosError } from 'axios';

import cookies from '../utils/coookieHelper';
import authApi from './authApi';
import getDeviceId from '../utils/deviceHelper';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4000/api',
  headers: {
    deviceId: getDeviceId(),
  },
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  try {
    const originalRequest = error.config;
    if (error instanceof AxiosError && error.response?.status === 401) {
      originalRequest.isRetry = true;
      // eslint-disable-next-line no-console
      console.log(originalRequest);
      const respone = await authApi.refresh();
      const { accessToken, refreshToken } = respone;
      cookies.access.set(accessToken);
      cookies.access.set(refreshToken);
      if (originalRequest) {
        return axiosInstance.request(originalRequest);
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  // eslint-disable-next-line no-console
  console.log('unknown error', error);
});

axiosInstance.interceptors.request.use((request) => {
  const accessToken = cookies.access.get();
  const refreshToken = cookies.refresh.get();
  const customRequest = request;
  if (accessToken && refreshToken) {
    customRequest.headers = {
      authorization: [`Bearer ${accessToken}`, `Bearer ${refreshToken}`],
      ...request.headers,
    };
  }
  return request;
});

export default axiosInstance;
