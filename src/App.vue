<template>
    <!-- eslint-disable max-len -->
    <div id="app">
        <NavBar></NavBar>
        <h3>Click on the animation to copy.</h3>
        <div class="wrapper">
            <Box :rawCss="rawCss.borderLeftRight" @is-copied="messageHandler" className="borderLeftRight">Hover me</Box>
            <Box :rawCss="rawCss.donutSpinner" @is-copied="messageHandler" className="donutSpinner"></Box>
            <Box :rawCss="rawCss.borderFade" @is-copied="messageHandler" className="borderFade">Hover me</Box>
            <Box :rawCss="rawCss.bouncingLoader" @is-copied="messageHandler" className="bouncingLoader"><div></div><div></div><div></div></Box>
            <Box :rawCss="rawCss.depthButton" @is-copied="messageHandler" className="depthButton ">Hover me</Box>
            <Box :rawCss="rawCss.arrowBounce" @is-copied="messageHandler" className="arrowBounce"><font-awesome-icon icon="arrow-down" /></Box>
            <Box :rawCss="rawCss.gradientBorder" @is-copied="messageHandler" className="gradientBorder ">Hover me</Box>
            <Box :rawCss="rawCss.buttonLeft" @is-copied="messageHandler" className="buttonLeft"><span class="buttonLeftSpan">Hover me</span></Box>
            <Box :rawCss="rawCss.siblingFade" @is-copied="messageHandler" className="siblingFade"><span>Item 1 </span><span>Item 2 </span></Box>
            <Box :rawCss="rawCss.radiusButton" @is-copied="messageHandler" className="radiusButton"><span>Hover me</span></Box>
            <Box :rawCss="rawCss.glowButton" @is-copied="messageHandler" className="glowButton">Hover me</Box>
            <Box :rawCss="rawCss.borderCenter" @is-copied="messageHandler" className="borderCenter">Hover me</Box>
            <Box :rawCss="rawCss.borderMarker" @is-copied="messageHandler" className="borderMarker">Hover me</Box>
            <Box :rawCss="rawCss.textAnimationLeft" @is-copied="messageHandler" className="textAnimationLeft"><span>Hover me</span></Box>
        </div>
        <transition name="fade">
            <FlashMessage v-if="isActive"></FlashMessage>
        </transition>

    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import rawCss from '@/styles/index';
import Box from '@/components/Box.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'app',
  components: { NavBar, Box, FlashMessage },

  data() {
    return {
      rawCss,
      isActive: false,
    };
  },

  methods: {
    displayMessage() {
      this.isActive = true;
    },
    hideMessage() {
      this.isActive = false;
    },
    messageHandler() {
      this.displayMessage();
      setTimeout(this.hideMessage, 1500);
    },
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
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
