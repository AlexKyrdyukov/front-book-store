import axios from 'axios';

import cookies from '../utils/coookieHelper';

import getDeviceId from '../utils/deviceHelper';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    deviceId: getDeviceId(),
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

export default axiosInstance;
