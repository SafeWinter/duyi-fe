<template>
  <div class="contact-item-preview">
    <ContactItem :icon="icon" :label="label" :link="link" :qrCode="qrCode"/>
    <ContactItem :icon="icon" :label="label" :link="link" :qrCode="qrCode"/>
    <ContactItem :icon="icon" :label="label" :link="link" :qrCode="qrCode"/>
  </div>
</template>

<script>
import ContactItem from './';

import qrCode from '@/assets/qrcode.png';

export default {
  name: 'ContactItemPreview',
  components: {
    ContactItem
  },
  data() {
    return {
      link: 'https://github.com/SafeWinter',
      icon: 'github',
      label: 'SafeWinter',
      qrCode,
    };
  },
}
</script>

<style scoped lang="less">
@import '~@/styles/variables.less';

.contact-item-preview {
  width: 300px;
  height: 300px;
  background-color: @dark;
  color: @lightWords;
  margin-inline: auto;
  padding-block-start: 15em;
}
</style>