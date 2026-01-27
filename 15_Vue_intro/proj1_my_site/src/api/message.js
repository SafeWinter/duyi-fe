import request from './request';

export async function getMessages(page = 1, limit = 10, keyword = '') {
  return await request.get('/api/message', {
    params: {
      page,
      limit,
      keyword,
    }
  })
};

/**
 * 提交到网站留言板的评论内容
 * @param {Object} comment 待提交的评论信息对象，包含参数：
 *   - nickname: 昵称
 *   - content: 评论内容，纯文本
 * @returns 操作结果
 */
export async function postMessage(comment) {
  return await request.post('/api/message', comment);
}