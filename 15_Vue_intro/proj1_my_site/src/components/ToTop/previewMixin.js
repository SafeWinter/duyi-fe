// DeepSeek 2026-01-19: 
// 为预览环境单独创建事件总线
import eventBus from "@/eventBus";

export default {
  // 在 beforeCreate 中挂载到所有子组件
  beforeCreate() {
    // 挂载到当前组件实例
    this.$bus = eventBus;

    // 确保所有子组件都能访问
    // version 1:
    this.$options.components.ToTop.beforeCreate = function () {
      this.$bus = eventBus;
    };
    this.$options.components.LongPage.beforeCreate = function () {
      this.$bus = eventBus;
    };

    /* 
    // version 2:
    const {ToTop: tt, LongPage: lp} = this.$options.components;
    [tt, lp].forEach(comp => comp.beforeCreate = function () {
      this.$bus = PreviewEventBus;
    });
    */
  },
  mounted() {
    console.log("Preview EventBus:", this.$bus); // 现在应该能正常访问
  },
};