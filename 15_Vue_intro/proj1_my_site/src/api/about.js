import request from './request';

export async function getAboutData() {
  return await request.get('/api/about');
}