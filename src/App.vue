<template>
  <div id="app" class="antialiased">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <h2 class="text-gray-900 text-xl font-medium mt-10 text-center">
        Click on the animation to copy the css
      </h2>
      <EffectsList :effects="effects" />
    </div>
    <Alert />
  </div>
</template>

<script>
import Header from "@/components/Header";
import EffectsList from "@/components/EffectsList";
import Alert from "@/components/Alert";
import rawCss from "@/styles";
import effects from "@/effects";

export default {
  name: "App",
  components: {
    Header,
    EffectsList,
    Alert
  },
  data() {
    return {
      rawCss,
      effects
    };
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
</style>
