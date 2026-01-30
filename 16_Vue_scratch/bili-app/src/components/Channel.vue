<template>
  <div class="channel-container">
    <Item :isActive="activeId === channel.id" @activate="$emit('activate', channel.id)">
      <div class="inner">
        <span class="label">{{ channel.cname }}</span>
        <span class="num">{{ channel.count }}</span>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "Channel",
  components: {
    Item,
  },
  props: {
    activeId: {
      type: Number,
      required: true,
    },
    channel: {
      type: Object,
      default: () => ({}),
    }
  },
};
</script>

<style scoped>
.channel-container {
  width: 100%;
  height: 40px;
  line-height: 40px;

  --titleColor: #212121;
  --iconColor: #999;
}
.inner {
  padding: 0 20px;
  display: flex;
  gap: 0.2em;
}

.label {
  color: var(--titleColor);
  font-size: .875em;
  flex: 1;
}
.num {
  color: var(--iconColor);
  font-size: .75em;
  flex: 0;
}
</style>
