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
    // eslint-disable-next-line no-console
    console.log('16 event');
    const customRequest = request;
    customRequest.headers!.authorization = `Bearer ${accessToken}`;
  }
  return request;
});
axiosInstance.interceptors.response.use((response) => {
  // eslint-disable-next-line no-console
  console.log(24, 'response');
  return response;
}, async (error) => {
  // eslint-disable-next-line no-console
  console.log(27, 'error');
  const originalRequest = error.config;
  // eslint-disable-next-line no-console
  console.log(originalRequest);
  if (error instanceof AxiosError &&
    error.response?.status === 401 &&
    originalRequest.url !== '/refresh'
  ) {
    originalRequest.repeat = true;
    try {
      const oldRefreshToken = cookies.refresh.get();
      const response = await authApi.refresh(`Bearer ${oldRefreshToken}`);
      const { accessToken, refreshToken } = response;
      // eslint-disable-next-line no-console
      console.log(35, response);
      cookies.access.set(accessToken);
      cookies.refresh.set(refreshToken);
      if (originalRequest) {
        const req = await axiosInstance.request(originalRequest);
        return req;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      throw error;
    }
  }
  // eslint-disable-next-line no-console
  console.log(error);
  throw error;
});

export default axiosInstance;
