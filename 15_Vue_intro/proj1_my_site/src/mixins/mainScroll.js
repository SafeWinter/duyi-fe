import { debounce } from '@/utils';

export default function(refName) {
  return {
    mounted(){
      // as publisher
      this.debouncedMainScroll = debounce(this.handleMainScroll, 50);
      this.$refs[refName].addEventListener('scroll', this.debouncedMainScroll);
      
      // as observor
      this.$bus.$on('backToTop', this.handleBackToTop);
    },
    beforeDestroy(){
      // as publisher
      this.$refs[refName].removeEventListener('scroll', this.debouncedMainScroll);
      // 切换到其他组件前，通知所有观察者停止响应（BlogComment、BlogToc、ToTop）
      // 若不传 dom 参数，则不执行 mainScroll 回调
      this.$bus.$emit('mainScroll');  

      // as observor
      this.$bus.$off('backToTop', this.handleBackToTop);  // 订阅者在 ToTop
    },
    methods: {
      handleMainScroll() {
        this.$bus.$emit('mainScroll', this.$refs[refName]);
      },
      handleBackToTop(top) {
        this.$refs[refName].scrollTop = top;
      }
    }
  };
}