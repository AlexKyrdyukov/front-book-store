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

axiosInstance.interceptors.response.use((response) => {
  // eslint-disable-next-line no-console
  console.log(response);
  return response;
}, async (error) => {
  try {
    const originalRequest = error.config;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // eslint-disable-next-line no-console
    if (error instanceof AxiosError && error.response?.status === 401) {
      // eslint-disable-next-line no-console
      console.log(originalRequest);
      const respone = await authApi.refresh();
      const { accessToken, refreshToken } = respone;
      // eslint-disable-next-line no-console
      console.log(accessToken, refreshToken);
      cookies.access.set(accessToken);
      cookies.refresh.set(refreshToken);
      if (originalRequest) {
        // eslint-disable-next-line no-console
        console.log('repeat request');
        // eslint-disable-next-line no-console
        console.log(originalRequest);
        return axiosInstance.request(originalRequest);
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
  // eslint-disable-next-line no-console
  console.log(error);

  throw error;
});

export default axiosInstance;
