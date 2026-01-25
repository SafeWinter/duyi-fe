import request from './request';

// 获取全局 setting
export async function getSetting() {
  return await request.get('/api/setting');
}