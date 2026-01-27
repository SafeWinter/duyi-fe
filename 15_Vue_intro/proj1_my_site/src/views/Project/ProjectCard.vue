<template>
  <figure class="project-card-container">
    <section class="thumb">
      <a v-if="item.thumb && item.url" target="_blank" :href="item.url">
        <img v-lazy:[imgHeight]="item.thumb" :alt="item.name" :title="item.name">
      </a>
      <img v-else-if="item.thumb && !item.url" 
        v-lazy:[imgHeight]="item.thumb" :alt="item.name" :title="item.name">
      
      <Empty v-else text="暂无图片" />
    </section>
    <figcaption class="info">
      <h2 class="caption">
        <a v-if="item.url" :href="item.url" target="_blank" :title="item.name">{{item.name}}</a>
        <span v-else class="title" title="访问地址待补充">{{item.name}}</span>

        <a v-if="item.github" :href="item.github" target="_blank">
          <img :src="logo" :alt="`Go to ${item.github}`" :title="`Go to ${item.github}`"/>
        </a>
      </h2>
      <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
    </figcaption>
  </figure>
</template>

<script>
import logo from '@/assets/gh.svg';
import Empty from '@/components/Empty';

export default {
  name: "ProjectCard",
  props: ['item'],
  components: {
    Empty,
  },
  data(){
    return {
      logo,
      imgHeight: 271, // px
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";

a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: @primary;
  }
  &.title:hover {
    color: inherit;
  }
}
.project-card-container {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  position: relative;

  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    border-radius: 5px;
    margin-right: 15px;
    position: relative;

    & a {
      display: block;
    }

    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.3;
    flex: 1 1 auto;
    & h2 {
      margin: 0;
    }
    & p {
      text-align: left;
    }
  }
  .caption {
    display: flex;
    gap: 0.5em;
  }
  & .title {
    cursor: text;
  }
}
</style>
