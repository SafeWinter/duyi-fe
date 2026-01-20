<template>
  <figure class="blog-card-container">
    <div class="cover">
      <router-link 
        class="link" 
        :to="{
          name: 'ArticleDetail',
          params: {
            id: data.id
          }
        }">
        <img v-if="data.thumb != null" 
          class="thumb" 
          v-lazy="getConfig(data.thumb)"
          :alt="data.title"
        />
        <Empty v-else :text="'暂无图片'" />
      </router-link>
    </div>
    <figcaption class="content" :class="{ 'plain-txt': !data.thumb }">
      <h1 class="title">
        <router-link 
          class="link" 
          :to="{
            name: 'ArticleDetail',
            params: {
              id: data.id
            }
          }">
          {{ data.title }}
        </router-link>
      </h1>
      <section class="blog-info">
        <div class="author-date">日期：{{ formatDate(data.createDate) }}</div>
        <div class="pv">浏览：{{ data.scanNumber }}</div>
        <div class="comments">评论：{{ data.commentNumber }}</div>
          <div class="category">
            所在分类：
            <router-link class="link" 
              :to="{
                name: 'CategorizedArticle',
                params: { categoryId: data.category.id }
              }">
              {{ data.category.name }}
            </router-link>
          </div>
      </section>
      <p class="summary">{{ data.description }}</p>
    </figcaption>
  </figure>
</template>

<script>
import thumb from "@/assets/demo_cover.png";
import Empty from '@/components/Empty';
import { formatDate } from "@/utils";

const defaults = {
  id: "<id>",
  title: "标题",
  description: "示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述示例描述示",
  category: {
    id: 3,
    name: "分类3",
  },
  scanNumber: 10,
  commentNumber: 30,
  thumb,
  createDate: formatDate(Date.now()),
};

export default {
  name: "BlogCard",
  components: {
    Empty
  },
  props: {
    data: {
      type: Object,
      default: () => ({...defaults}),
    },
  },
  data(){
    return {
      height: 180
    }
  },
  methods: {
    formatDate,
    getConfig(src) {
      return {
        src,
        height: this.height
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/variables.less';

.blog-card-container {
  padding: 0.5em;
  margin: 0;
  border-block: 0.5px solid #eeeeeee1;
  display: flex;
  height: 180px;
  text-align: left;

  & .link:hover {
    color: @primary;
  }

  & > .cover {
    width: 250px;
    display: inline-block;
    border-radius: 0.375em;
    margin-inline-end: 1.5em;
    height: 100%;
    position: relative;

    & .thumb {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 0.375em;
    }
  }

  & > .content {
    flex: 7;

    &.plain-txt {
      flex: 1;
    }
    & > .blog-info {
      font-size: 0.625em;
      color: #888;
      margin-block: 0.5em;
      display: flex;
      gap: 1em;
    }
    & > .summary {
      color: #3d3d3d;
      font-size: 0.875rem;
    }
  }

  & .title {
    color: inherit;
    font-size: 1.625em;
    margin-block: 0.125em;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
