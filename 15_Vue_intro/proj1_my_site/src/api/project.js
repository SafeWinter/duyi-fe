import request from './request.js';

export async function getProjectData() {
  return await request.get('/api/project');
}