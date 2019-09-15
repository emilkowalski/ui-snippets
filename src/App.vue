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

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    background: #fcfdff;
    font-family: europa, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #474E51;
    margin: 0;
    padding: 0 0 6rem 0;
    font-size: 1.6rem;
    position: relative;
    min-height: 100%;
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

    .router-link-active {
      text-decoration: underline;
    }
  }

</style>
