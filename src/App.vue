<template>
    <div id="app">
        <NavBar></NavBar>
        <h3>Click on the animation to copy.</h3>
        <div class="wrapper">
            <Box :rawCss="rawCss.borderLeftRight" className="borderLeftRight">Hover me</Box>
            <Box :rawCss="rawCss.donutSpinner" className="donutSpinner"></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import rawCss from '@/styles/index';
import Box from '@/components/Box.vue';

export default {
  name: 'app',
  components: { NavBar, Box },

  data() {
    return {
      rawCss,
    };
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
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
    }

    h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 4rem;
        margin-top: 0;
    }
</style>
