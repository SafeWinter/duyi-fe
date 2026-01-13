<template>
  <div class="blog-list-preview" v-loading="loading">
    <BlogList />
  </div>
</template>

<script>
import Vue from "vue";
import { getMessage } from "@/utils";
import "@/mock";
import { fetchRemoteData } from "@/mixins";
import vLoading from "@/directives/loading";
import BlogList from ".";
import router from "@/router";
import { getBlogs } from "@/api/blog";

Vue.prototype.$getMessage = getMessage;

export default {
  name: "BlogListPreview",
  mixins: [fetchRemoteData([])],
  components: {
    BlogList,
  },
  directives: {
    loading: vLoading
  },
  router,
  methods: {
    async getRemoteData() {
      return await getBlogs(1, 10, -1);
    },
  },
  data() {
    return {
      loading: false
    }
  }
};
</script>

<style lang="less" scoped>
.blog-list-preview {
  width: 80%;
  height: 85vh;
  margin: 3em auto;
}
</style>
