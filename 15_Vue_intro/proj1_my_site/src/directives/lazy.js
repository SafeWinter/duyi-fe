import eventBus from '@/eventBus';
import { debounce } from '@/utils';
import imgDefault from '@/assets/default.gif';

let imgs = []; // 缓存真实图片及 DOM 元素

// 辅助调试开关
let timer = setInterval(() => console.log(imgs), 2000);

function removeFromCache({dom}, arr = imgs) {
  return arr.filter(e => e.dom !== dom);
}

function inSightOfViewPort(dom, heightDft = 180) {
    const { top, height } = dom.getBoundingClientRect();
    const lowerH = -(height || heightDft);
    const upperH = document.documentElement.clientHeight;
    return top >= lowerH && top <= upperH;
  }

function setImage(elem, height, defaultSrc = imgDefault) {
  // 先设置默认占位图片
  elem.dom.src = defaultSrc;

  if(inSightOfViewPort(elem.dom, height)) {
    const tempImg = new Image();

    tempImg.onload = function() {
      elem.dom.src = elem.src;
      imgs = removeFromCache(elem);  // DIY 优化：预加载成功后再移除
    };
    tempImg.onerror = function() {
      console.error('图片加载失败:', elem.src);
      // 可以设置一个错误占位图
      elem.dom.src = defaultSrc;
    };
    
    tempImg.src = elem.src;
  }
}

function setImages() {
  if(imgs.length === 0) {
    if(timer) {
      clearInterval(timer);
      timer = undefined;
      console.log('所有图片已加载完毕!');
      console.log('事件总线注册情况：');
      eventBus.$view('mainScroll');
    }
    return;
  }

  imgs.forEach(img => setImage(img));
}

eventBus.$on('mainScroll', debounce(setImages, 50), 'from lazy directive');

export default {
  bind() {
    console.log('from bind', Date.now());
  },
  unbind(el) {
    // 从当前组件切走后，随即移除该元素
    console.log('from: unbind', Date.now());
    if(timer) {
      clearInterval(timer);
      timer = undefined;
    }
    imgs = removeFromCache({dom: el});
  },
  inserted(el, binding) {
    console.log('from: inserted', Date.now());
    if(!timer) {
      console.log('restart timer');
      timer = setInterval(() => console.log(imgs), 2000);
    }
    const {src, height} = binding.value;
    const elem = {
      dom: el,
      src
    };
    imgs.push(elem);
    // 初始加载时，不等滑屏立即判定一次
    setImage(elem, height);
  },
  timer
}