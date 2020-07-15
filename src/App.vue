<template>
  <div id="app" class="antialiased bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <h2 class="text-gray-900 text-xl font-medium mt-10 text-center">
        Click on the animation to copy the css
      </h2>
      <EffectsList :effects="effects" />
    </div>
    <transition
      enter-active-class="transition transform ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200 transition transform"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <Alert v-show="isNotificationActive" />
    </transition>
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
  },
  computed: {
    isNotificationActive() {
      return this.$store.state.isNotificationActive;
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
</style>
