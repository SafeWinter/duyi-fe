import request from '@/api/request';

/**
 * 获取博客分类列表
 * @returns {Promise} 返回一个包含博客分类列表的 Promise 对象
 */
export async function getBlogCategories() {
  return await request.get('/api/blogtype');
};

/**
 * 获取博客文章列表
 * @param {Number} page 当前页码
 * @param {Number} limit 每页显示的文章数量
 * @param {Number} categoryId 分类ID，-1表示所有分类
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return await request.get('/api/blog', {
    params: {
      page,
      limit,
      categoryId
    }
  });
}