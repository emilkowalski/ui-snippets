<template>
  <div
    class="cursor-pointer flex justify-center items-center"
    v-clipboard:copy="effect.css"
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
  }
};
</script>
