import axios from 'axios';

import cookies from '../coookieHelper/CookieStorage';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

axiosInstance.interceptors.request.use((request) => {
  const token = cookies.token.get();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${token}`,
    };
  }
  return request;
});

export default axiosInstance;
