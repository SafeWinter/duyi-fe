<template>
  <div>
    <Avatar :url="url" :size="size" />
  </div>
</template>

<script>
import Avatar from './';

export default {
    components: {
        Avatar
    },
    data() {
        return {
            url: 'http://mdrs.yuanjin.tech/img/20201031141350.jpg',
            size: 200
        }
    }
}
</script>

<style>

</style>