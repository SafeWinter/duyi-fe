<template>
  <div class="message-area-container">
    <data-form v-on="$listeners"/>
    <h3 class="header">
      {{ title }}
      <span class="sub">{{ subTitle }}</span>
    </h3>
    <data-list :data="list"/>
    <div class="no-more" v-if="noMore">数据已全部加载完毕</div>
    <div class="loading" :class="hiddenIfNoMore" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from './DataForm';
import DataList from './DataList'

export default {
  name: "MessageArea",
  components: {
    DataForm,
    DataList
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    noMore() {
      if(!this.subTitle) {
        return false;
      }
      // console.log('subTitle:', this.subTitle);
      const total = parseInt(this.subTitle.match(/\d+/)[0]);
      return this.list.length >= total;
    },
    hiddenIfNoMore() {
      return {
        hidden: this.noMore
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.message-area-container {
  & .header {
    text-align: left;
    margin-inline-start: 1em;
    & .sub {
      font-size: 0.875em;
    }
  }

  & > .loading {
    height: 6em;
    position: relative;

    &.hidden {
      display: none;
    }
  }

  & > .no-more {
    margin-block: 3em 4em;
    font-size: 0.875rem;
    font-style: italic;
    color: lighten(@words, 50%);
    width: 140px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;

    position: relative;
    &::before, &::after {
      content: '—';
      display: inline-block;
      position: absolute;
      top: -0.05em;
    }
    &::before {
      left: -1em;
    }
    &::after {
      right: -1em;
    }
  }
}
</style>
