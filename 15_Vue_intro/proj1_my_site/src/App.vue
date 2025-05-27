<template>
  <div>
    <h1>App 组件</h1>
    <Avatar :size="size" :url="url" />
  </div>
</template>

<script>
import Avatar from './components/Avatar';

export default {
  name: 'App',
  components: {
    Avatar
  },
  data() {
    return {
      url: 'http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c',
      size: 150
    }
  },
}
</script>
