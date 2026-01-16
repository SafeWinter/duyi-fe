<template>
  <figure class="data-item-container">
    <section class="avatar">
      <Avatar :url="item.avatar" :size="size" />
    </section>
    <figcaption class="desc">
      <p class="nickname">{{ item.nickname }}</p>
      <p class="detail">{{ item.content }}</p>
      <p class="timestamp">{{ item.createDate | formatDate }}</p>
    </figcaption>
  </figure>
</template>

<script>
import Avatar from '@/components/Avatar';
import { formatDate } from '@/utils';

export default {
  name: "DataItem",
  components: {
    Avatar
  },
  filters: {
    formatDate
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      size: 44,
    }
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/variables.less';

.data-item-container {
  display: flex;
  gap: 0.875em;
  margin-inline: 1em;
  padding-block: 1em;
  border-bottom: 1px solid lighten(@gray, 20%);
  
  & > .desc {
    position: relative;
    text-align: left;
    flex: 1 1 auto;

    & .nickname {
      color: @success;
      font-weight: 700;
      margin-block: 0.125em 1em;
    }

    & .timestamp {
      position: absolute;
      top: 0;
      right: 0;
      color: lighten(@gray, 5%);
      font-size: 0.75rem;
    }
  }
}
</style>
