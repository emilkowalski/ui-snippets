<template>
    <div class="box" v-clipboard:copy="css">
        <div class="slot-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Box.vue',

  data() {
    return {
      css: this.rawCss,
    };
  },

  props: {
    rawCss: {
      type: String,
      default: '',
    },
  },
  methods: {
    onCopy(e) {
      alert(`You just copied: ${e.text}`);
    },
    onError(e) {
      alert('Failed to copy texts');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
