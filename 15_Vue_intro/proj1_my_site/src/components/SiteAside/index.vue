<template>
  <aside class="site-aside-container">
    <header>
      <Avatar :url="url" />
      <h1 class="site-title">{{ title }}</h1>
    </header>
    <main>
      <Menu></Menu>
      <Contact />
    </main>
    <footer>
      <p>{{ icp }}</p>
    </footer>
  </aside>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
import { mapState } from "vuex";

export default {
  name: "SiteAside",
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: {
    ...mapState("setting", {
      url: ({data}) => data && data.avatar,
      title: ({data}) => data && data.siteTitle,
      icp: ({data}) => data && data.icp,
    }),
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/variables.less";
.site-aside-container {
  height: 100%;
  padding-block: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: @lightWords;
  background-color: @dark;

  header {
    text-align: center;
    margin-bottom: 1em;

    .site-title {
      font-size: 1.5em;
      margin-block: 0.5em;
      color: @lightWords;
    }
  }

  main {
    flex-grow: 1;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6em;

    .contact-container {
      margin-inline-start: -2.5em;
    }
  }

  footer {
    font-size: 0.8em;
    color: @words;
    text-align: center;
    margin-top: 2em;
  }
}
</style>
