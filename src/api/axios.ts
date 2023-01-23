import axios from 'axios';

import cookies from '../utils/coookieHelper/CookieStorage';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

axiosInstance.interceptors.request.use((request) => {
  const token = cookies.token.get();
  const customRequest = request;
  if (token) {
    customRequest.headers = {
      authorization: `Bearer ${token}`,
      ...request.headers,
    };
  }
  return request;
});

export default axiosInstance;
