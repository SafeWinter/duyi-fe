<template>
  <figure class="contact-item-container">
    <figcaption class="label">
      <a v-if="hasLink" :href="link" target="_blank">
        <Icon class="icon" :type="icon" /><span>{{ label }}</span>
      </a><a v-else>
        <Icon :type="icon" /><span>{{ label }}</span>
      </a>
    </figcaption>
    <div class="pop" v-if="hasQrCode">
      <img :src="qrCode">
    </div>
  </figure>
</template>

<script>
import Icon from '@/components/Icon';

const validString = str => str && typeof str === 'string' && str.trim().length > 0;

export default {
  name: 'ContactItem',
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    },
    qrCode: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasQrCode() {
      return validString(this.qrCode);
    },
    hasLink() {
      return validString(this.link);
    }
  },
}
</script>

<style scoped lang="less">
@import '~@/styles/global.less';
@size: 150px;
.contact-item-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 40px;

  & > .pop {
    position: absolute;
    height: @size;
    width: @size;
    left: center;
    top: -(@size + 8px);
    padding: 5px;
    background-color: white;
    border-radius: 5px;

    transform: scaleY(0);
    transform-origin: bottom center;
    transition: transform 0.2s ease-in-out;

    & > img {
      height: 100%;
      width: 100%;
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      background-color: white;
      transform: translate(@size / 5, @size - 5px) rotate(45deg);
    }
  }
  
  & > .label {
    & > a {
      cursor: pointer;
      display: flex;
      gap: 0.3em;
      justify-self: flex-start;
      width: 100%;
    }

    & .icon-container {
      font-size: 1.6em;
    }

    &:hover + .pop {
      transform: scaleY(1);
    }
  }


}

</style>