<template>
  <div class="message-area-container">
    <data-form v-on="$listeners"/>
    <h3 class="header">
      {{ title }}
      <span class="sub">{{ subTitle }}</span>
    </h3>
    <data-list :data="list"/>
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
};
</script>

<style lang="less" scoped>
.message-area-container {
  & .header {
    text-align: left;
    margin-inline-start: 1em;
    & .sub {
      font-size: 0.875em;
    }
  }
}
</style>
