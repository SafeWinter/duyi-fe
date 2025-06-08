import getComponentRootDom from './getComponentRootDom';
import styles from './showMessage.module.less';

import Icon from '@/components/Icon';

/**
 * 弹出消息提示
 * @param {object} options 配置对象，包含以下属性：
 * - content: 消息内容(String)
 * - type: 消息类型（String: info, success, warn, error）
 * - duration: 消息持续时间（Number，单位毫秒，默认 2000ms）
 * - container: 消息容器（HTMLElement，默认 document.body）
 * - callback: 回调函数（Function，消息消失后执行）
 * @returns {void}
 */
export default function getMessage(options) {
  const content = options.content || '';
  const type = options.type || 'info';
  const duration = options.duration || 2000;
  const container = options.container || document.querySelector('.main'); // 默认容器为 .main，而非 body
  const callback = options.callback || (() => {});

  // 创建 DOM 元素
  const div = document.createElement('div');
  div.classList.add(styles.message, styles[`message-${type}`]);
  const iconEl = getComponentRootDom(Icon, {type});
  const iconHTML = iconEl.outerHTML || '';
  div.innerHTML = `<span class="${styles.icon}">${iconHTML}</span><div>${content}</div>`;

  let isStatic = false;
  if(options.container && getComputedStyle(container).position === 'static') {
    isStatic = true;
    container.classList.add(styles.relative);
  }
  container.appendChild(div);

  setTimeout(() => {
    console.log('消息框渲染完毕');
    div.classList.add(styles.normal);
    setTimeout(() => {
      div.classList.replace(styles.normal, styles.hidden);
      div.addEventListener('transitionend', () => {
        div.remove();
        if (isStatic) {
          container.classList.remove(styles.relative);
          isStatic = false;
        }
        callback();
      }, { once: true });
    }, duration);
  }, 0);
};
