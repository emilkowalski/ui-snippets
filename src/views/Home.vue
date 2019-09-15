/* eslint-disable */
<template>
  <!-- eslint-disable max-len -->
  <div id="home">
    <h3>Click on the animation to copy.</h3>
    <div class="selectBox">
      <select v-model="filtered" @change="updateVisibleBoxes">
        <option value="all" selected disabled>Filter results</option>
        <option value="all">All effects</option>
        <option value="animation">Animations</option>
        <option value="text">Text</option>
        <option value="button">Buttons</option>
      </select>
    </div>
    <div class="wrapper">
      <Box :key="box.rawCss" v-bind="box" v-for="box in visibleBoxes">
        <div slot="innerHtml" v-html="box.text"></div>
      </Box>
    </div>
    <transition name="fade">
      <FlashMessage v-if="isActive"></FlashMessage>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import rawCss from '@/styles/index';
import Box from '@/components/Box.vue';
import FlashMessage from '@/components/FlashMessage.vue';

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
      visibleBoxes: [],
    };
  },
  created() {
    this.visibleBoxes = this.filteredBoxes;
  },

  methods: {
    updateVisibleBoxes() {
      this.visibleBoxes = this.filteredBoxes;
    },
  },
  computed: {
    boxes() {
      return [
        {
          rawCss: this.rawCss.borderLeftRight,
          className: 'borderLeftRight',
          category: 'textAnimation',
          text: '<span>Hover me</span>',
        },
        {
          rawCss: this.rawCss.donutSpinner,
          className: 'donutSpinner',
          category: 'animation',
          text: '',
        },
        {
          rawCss: this.rawCss.borderFade,
          className: 'borderFade',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.depthButton,
          className: 'depthButton',
          category: 'button',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.arrowBounce,
          className: 'arrowBounce',
          category: 'animation',
          text: '',
        },
        {
          rawCss: this.rawCss.buttonLeft,
          className: 'buttonLeft',
          category: 'button',
          text: '<span class="buttonLeftSpan">Hover me</span>',
        },
        {
          rawCss: this.rawCss.gradientBorder,
          className: 'gradientBorder',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.siblingFade,
          className: 'siblingFade',
          category: 'text',
          text: '<span>Item 1 </span><span>Item 2 </span>',
        },
        {
          rawCss: this.rawCss.borderCenter,
          className: 'borderCenter',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.textAnimationLeft,
          className: 'textAnimationLeft',
          category: 'button',
          text: '<span>Hover me</span>',
        },
        {
          rawCss: this.rawCss.borderMarker,
          className: 'borderMarker',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.gradientText,
          className: 'gradientText',
          category: 'text',
          text: '<span>Hover me</span>',
        },
        {
          rawCss: this.rawCss.lineThrough,
          className: 'lineThrough',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.textRightLeft,
          className: 'textRightLeft',
          category: 'button',
          text: '<span>Hover me</span>',
        },
        {
          rawCss: this.rawCss.slideRight,
          className: 'slideRight',
          category: 'animation',
          text: '',
        },
        {
          rawCss: this.rawCss.borderRightLeft,
          className: 'borderRightLeft',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.textZoom,
          className: 'textZoom',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.iconRadius,
          className: 'iconRadius',
          category: 'animation',
          text: '',
        },
        {
          rawCss: this.rawCss.lineThroughBox,
          className: 'lineThroughBox',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.pulseAnim,
          className: 'pulseAnim',
          category: 'animation',
          text: '',
        },
        {
          rawCss: this.rawCss.bouncingLoader,
          className: 'bouncingLoader',
          category: 'animation',
          text: '',
        },
        {
          rawCss: this.rawCss.swingHorizontal,
          className: 'swingHorizontal',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.swingVertical,
          className: 'swingVertical',
          category: 'text',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.buttonOverlay,
          className: 'buttonOverlay',
          category: 'button',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.doubleDashed,
          className: 'doubleDashed',
          category: 'button',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.slideDown,
          className: 'slideDown',
          category: 'button',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.slideUp,
          className: 'slideUp',
          category: 'button',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.arrowFromLeft,
          className: 'arrowFromLeft',
          category: 'button',
          text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9" height="9"> <path d="M0 0l7 4.5L0 9V0z"></path></svg><span>Hover me</span>',
        },
        {
          rawCss: this.rawCss.pressDown,
          className: 'pressDown',
          category: 'button',
          text: 'Hover me',
        },
        {
          rawCss: this.rawCss.magnifyBorder,
          className: 'magnifyBorder',
          category: 'button',
          text: 'Hover me',
        },
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
</script>speed={100}

<style lang="scss">
  @import url("https://use.typekit.net/moy8qkv.css");

  .wrapper {
    width: 80%;
    margin: 0 auto 4rem auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 15px;
    padding: 20px;

    @media (max-width: 1000px) {
      width: 100%;
      grid-template-columns: 1fr 1fr;
    }
  }

  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 4rem;
    margin-top: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  select {
    border: 1px solid #dae0e7;
    color: #474e51;
    background: transparent;
    font-size: 18px;
    padding: 7px 15px;
    width: 100%;
    -webkit-appearance: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
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
      content: "";
      position: absolute;
      top: 48%;
      right: 16px;
      height: 6px;
      width: 10px;
      background: url("../assets/images/down-arrow.svg") no-repeat;
    }
  }
</style>
