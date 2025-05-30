<template>
  <div class="contact-container">
    <ContactItem v-for="({icon, label, link, qrCode}, i) in items" :key="i"
      :icon="icon"
      :label="label"
      :link="link"
      :qrCode="qrCode"
    />
  </div>
</template>

<script>
import ContactItem from '@/components/SiteAside/Contact/ContactItem';

import qrCode from '@/assets/qrcode.png';
export default {
  name: 'Contact',
  components: {
    ContactItem
  },
  data() {
    return {
      items: [
        {
          icon: 'github',
          label: 'SafeWinter',
          link: 'https://github.com/SafeWinter/',
          // qrCode
        },
        {
          icon: 'mail',
          label: 'abcdefg@gmail.com',
          link: 'mailto:abcdefg@gmail.com',
          // qrCode
        },
        {
          icon: 'weixin',
          label: 'Peaceful-Winter',
          // link: '',
          qrCode
        },
        {
          icon: 'qq',
          label: '277595147',
          // link: 'tencent://message/?Menu=yes&uin=277595147&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45',
          qrCode
        }
      ]
    };
  },
}
</script>

<style scoped lang="less">
.contact-container {
  display: flex;
  flex-direction: column;
  margin-inline-start: 1em;
  background-color: transparent;
}
</style>