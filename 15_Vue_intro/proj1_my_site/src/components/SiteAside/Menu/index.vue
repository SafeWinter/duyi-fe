<template>
  <nav class="menu-container">
    <li
      class="menu-item"
      v-for="{ name, icon, label, exact } in items"
      :key="name"
    >
      <router-link
        :to="{name}"
        class="link"
        :exact="exact"
        active-class="selected"
        exact-active-class=""
      >
        <Icon :type="icon" />
        <span class="label">{{ label }}</span>
      </router-link>
    </li>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        { name: "Home", icon: "home", label: "首页", exact: true },
        { name: "Blog", icon: "blog", label: "文章", exact: false },
        { name: "About", icon: "about", label: "关于我", exact: true },
        { name: "Project", icon: "code", label: "项目 & 效果", exact: true },
        { name: "Message", icon: "chat", label: "留言板", exact: true },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/variables.less";

.menu-container {
  color: @lightWords;
  width: 100%;

  & > .menu-item {
    &:has(.selected) {
      background-color: @selected;
      color: @white;
    }
  }

  & .link {
    display: flex;
    align-items: center;
    justify-items: flex-start;
    height: 40px;
    gap: 8px;
    margin-inline: 40px;

    &:hover {
      color: @white;
    }

    & > .icon-container {
      font-size: 1.2em;
    }

    & > .label {
      display: inline-block;
    }
  }
}
</style>
