import axios from 'axios';
import { v4 as uuidv4, v4 } from 'uuid';

import cookies from '../utils/coookieHelper';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

const storageItem = {
  get() {
    const data = localStorage.getItem('deviceId');
    return data;
  },
  set(value: string) {
    localStorage.setItem('deviceId', value);
  },
};

const getDeviceId = () => {
  const deviceId = storageItem.get();
  if (!deviceId) {
    return v4();
  }
  return deviceId;
};

axiosInstance.interceptors.request.use((request) => {
  const token = cookies.token.get();
  const customRequest = request;
  if (token) {
    customRequest.headers = {
      authorization: `Bearer ${token}`,
      ...request.headers,
      deviceId: getDeviceId(),
    };
  }
  return request;
});

export default axiosInstance;
