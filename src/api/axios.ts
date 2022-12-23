import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
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
