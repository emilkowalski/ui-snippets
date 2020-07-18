<template>
  <div
    class="cursor-pointer flex justify-center items-center h-16"
    v-clipboard:copy="effect.css"
    v-clipboard:success="onSucces"
  >
    <div :class="effect.className" v-html="effect.html"></div>
  </div>
</template>
<script>
export default {
  props: {
    effect: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSucces() {
      this.$store.dispatch("addNotification");
    }
  }
};
</script>
