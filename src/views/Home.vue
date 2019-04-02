<template>
  <!-- eslint-disable max-len -->
  <div id="app">
    <h3>Click on the animation to copy.</h3>
    <div class="selectBox">
      <select  v-model="filtered">
        <option value="all" selected disabled>Filter results</option>
        <option value="all">All effects</option>
        <option value="animation">Animations</option>
        <option value="text">Text</option>
        <option value="button">Buttons</option>
      </select>
    </div>
    <div class="wrapper">
      <Box :key="box.rawCss" v-bind="box" v-for="box in filteredBoxes"><div slot="innerHtml" v-html="box.text"></div></Box>
    </div>
    <transition name="fade">
      <FlashMessage v-if="isActive"></FlashMessage>
    </transition>
  </div>
</template>

<script>
import rawCss from '@/styles/index';
import Box from '@/components/Box.vue';
import FlashMessage from '@/components/FlashMessage.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    Box,
    FlashMessage,
  },
  data() {
    return {
      rawCss,
      filtered: 'all',
    };
  },
  computed: {
    boxes() {
      return [
        { rawCss: this.rawCss.borderLeftRight, className: 'borderLeftRight', category: 'textAnimation', text: '<span>Hover me</span>' },
        { rawCss: this.rawCss.donutSpinner, className: 'donutSpinner', category: 'animation', text: '' },
        { rawCss: this.rawCss.borderFade, className: 'borderFade', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.depthButton, className: 'depthButton', category: 'button', text: 'Hover me' },
        { rawCss: this.rawCss.arrowBounce, className: 'arrowBounce', category: 'animation', text: '' },
        { rawCss: this.rawCss.buttonLeft, className: 'buttonLeft', category: 'button', text: '<span class="buttonLeftSpan">Hover me</span>' },
        { rawCss: this.rawCss.gradientBorder, className: 'gradientBorder', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.siblingFade, className: 'siblingFade', category: 'text', text: '<span>Item 1 </span><span>Item 2 </span>' },
        { rawCss: this.rawCss.borderCenter, className: 'borderCenter', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.textAnimationLeft, className: 'textAnimationLeft', category: 'button', text: '<span>Hover me</span>' },
        { rawCss: this.rawCss.borderMarker, className: 'borderMarker', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.gradientText, className: 'gradientText', category: 'text', text: '<span>Hover me</span>' },
        { rawCss: this.rawCss.lineThrough, className: 'lineThrough', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.textRightLeft, className: 'textRightLeft', category: 'button', text: '<span>Hover me</span>' },
        { rawCss: this.rawCss.slideRight, className: 'slideRight', category: 'animation', text: '' },
        { rawCss: this.rawCss.borderRightLeft, className: 'borderRightLeft', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.textZoom, className: 'textZoom', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.iconRadius, className: 'iconRadius', category: 'animation', text: '' },
        { rawCss: this.rawCss.lineThroughBox, className: 'lineThroughBox', category: 'text', text: 'Hover me' },
        { rawCss: this.rawCss.pulseAnim, className: 'pulseAnim', category: 'animation', text: '' },
      ];
    },
    filteredBoxes() {
      if (this.filtered === 'all') {
        return this.boxes;
      }
      return this.boxes.filter(box => box.category === this.filtered);
    },
    ...mapState(['isActive']),
  },
};
</script>

<style lang="scss">
  @import url("https://use.typekit.net/moy8qkv.css");

  html {
    font-size: 62.5%;
  }

  body {
    background: #fcfdff;
    font-family: europa, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #474E51;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  .wrapper {
    width: 70%;
    margin: 0 auto 4rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-gap: 80px 30px;
    @media (max-width: 1000px) {
      width: 100%;
      grid-template-columns: 1fr 1fr;
      grid-gap: 60px 20px;
    }
  }

  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 4rem;
    margin-top: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  select {
    border: 1px solid #DAE0E7;
    color: #474E51;
    background: transparent;
    font-size: 18px;
    padding: 7px 15px;
    width: 100%;
    -webkit-appearance: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    outline: 0;
  }

  .selectBox {
    position: relative;
    width: 200px;
    display: block;
    margin: 0 auto 40px auto;

    @media (max-width: 992px) {
      width: 160px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 48%;
      right: 16px;
      height: 6px;
      width: 10px;
      background: url('../assets/images/down-arrow.svg') no-repeat;
    }
  }
</style>
