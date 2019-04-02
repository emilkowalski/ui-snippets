<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
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

  #nav {
    padding-bottom: 4rem;
    text-align: center;

    a {
      color: #474E51;
      text-decoration: none;
      font-size: 1.8rem;

      &:hover {
        text-decoration: underline;
      }
    }

    .router-link-active{
      text-decoration: underline;
    }
  }
</style>
