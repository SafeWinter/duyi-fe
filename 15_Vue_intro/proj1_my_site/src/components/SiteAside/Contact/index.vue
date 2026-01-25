<template>
  <div class="contact-container">
    <ContactItem
      v-for="({ icon, label, link, qrCode }, i) in contacts"
      :key="i"
      :icon="icon"
      :label="label"
      :link="link"
      :qrCode="qrCode"
    />
  </div>
</template>

<script>
import ContactItem from "@/components/SiteAside/Contact/ContactItem";
import { mapGetters } from "vuex";

export default {
  name: "Contact",
  components: {
    ContactItem,
  },
  computed: {
    ...mapGetters("setting", ["contacts"]),
  },
};
</script>

<style scoped lang="less">
.contact-container {
  display: flex;
  flex-direction: column;
  margin-inline-start: 1em;
  background-color: transparent;
}
</style>
