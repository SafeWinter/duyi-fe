import axios from 'axios';
import { getMessage } from '@/utils';

const apiClient = axios.create();
apiClient.interceptors.response.use(function (resp) {
  const { code, msg, data } = resp.data;
  if (code !== 0) {
    getMessage({
      type: 'error',
      content: msg,
      duration: 500,
      callback: () => {
        console.error(`Error: ${msg}（code:${code}）`);
      }
    });
    return null;
  }
  return data; // Return the data directly if the code is 0
});

export default apiClient;