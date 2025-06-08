import request from './request';

// 获取banner
export async function getBanner() {
  return await request.get('/api/banner');
}