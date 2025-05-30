<template>
  <nav class="menu-container">
    <li class="menu-item" :class="{selected: isSelected({link, matchPrefix})}" 
    v-for="{link, icon, label, matchPrefix} in items" :key="link">
      <a :href="link" class="link">
        <Icon :type="icon"/>
        <span class="label">{{label}}</span>
      </a>
    </li>
  </nav>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  name: 'Menu',
  components: {
    Icon
  },
  data() {
    return {
      items: [
        { link: '/', icon: 'home', label: '首页' },
        { link: '/blog', icon: 'blog', label: '文章', matchPrefix: true},
        { link: '/about', icon: 'about', label: '关于我' },
        { link: '/project', icon: 'code', label: '项目 & 效果' },
        { link: '/message', icon: 'chat', label: '留言板' },
      ]
    };
  },
  methods: {
    isSelected({link, matchPrefix = false}) {
      const curPath = location.pathname;
      return matchPrefix
        ? curPath.startsWith('/blog')
        : curPath === link;      
    },
  },
}
</script>

<style scoped lang="less">
@import '~@/styles/global.less';
@import '~@/styles/variables.less';

.menu-container {
  color: @lightWords;
  width: 100%;

  &>.menu-item {
    &.selected {
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

    &>.icon-container {
      font-size: 1.2em;
    }

    &>.label {
      display: inline-block;
    }
  }
}
</style>