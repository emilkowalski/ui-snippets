<template>
    <div class="box" v-clipboard:copy="css" @click="isCopied">
        <div :class="className">
            <slot></slot>
            <slot name="innerHtml"></slot>
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
    className: {
      type: String,
      default: '',
    },
  },

  methods: {
    isCopied() {
      this.$store.dispatch('messageHandler');
    },
  },
};
</script>

<style lang="scss" scoped>

.box {
  min-height: 135px;
  min-width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

</style>
