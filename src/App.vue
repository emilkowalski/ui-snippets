<template>
    <div id="app">
        <NavBar></NavBar>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  components: { NavBar },
};
</script>

<style lang="scss">
    @import url("https://use.typekit.net/moy8qkv.css");

    html {
        font-size: 62.5%;
    }

    body {
        background: #F3F7F9;
        font-family: europa, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #474E51;
        margin: 0;
        padding: 0;
    }
</style>
