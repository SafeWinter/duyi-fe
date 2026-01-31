<template>
  <div class="channel-list-container">
    <section class="list-container" :style="dynmHeight">
      <Channel v-for="item in data" :key="item.id" 
        :style="dynmWidth"
        :activeId="activeId" 
        :channel="item"
        :height="rowHeight" 
        @activate="id => $emit('activate', id)"
      />
    </section>
    <CollapseBar class="bar"
      :collapsed="collapsed" 
      :height="barHeight" 
      @change="collapsed = !collapsed"
    />
  </div>
</template>

<script>
import Channel from './Channel';
import CollapseBar from './CollapseBar';

export default {
  name: 'ChannelList',
  components: {
    Channel,
    CollapseBar
  },
  props: {
    activeId: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      default: () => ([]),
    },
    cols: {
      type: Number,
      default: 2
    },
    rowHeight: { // 列表元素高度
      type: Number,
      default: 40,  // px
    },
    barHeight: {  // 折叠条高度
      type: Number,
      default: 40,  // px
    },
    minRows: {  // 折叠时展示的行数
      type: Number,
      default: 3
    }
  },
  computed: {
    dynmWidth() {
      const width = `${Math.round(1e5 / this.cols) / 1e3}%`;
      return { width };
    },
    dynmHeight() {
      const rows = this.collapsed ? this.minRows
        : Math.ceil(this.data.length / this.cols);
      return {height: `${this.rowHeight * rows}px`};
    },
  },
  data() {
    return {
      collapsed: false,
    }
  },
}
</script>

<style scoped>
.channel-list-container {
  border-bottom: 1px solid #e7e7e7;
}
.list-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  transition: height 0.3s ease-out;
}
</style>