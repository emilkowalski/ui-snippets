<template>
  <div id="app" class="antialiased bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <h2
        class="text-black w-56 mx-auto text-xl mt-10 text-center sm:w-auto sm:mx-0"
        style="font-size: 24px;
            font-weight: 500;
            line-height: 1.25;
            letter-spacing: -0.019em;"
      >
        Click on the animation to copy the css
      </h2>
      <EffectsList :effects="effects" />
    </div>
    <transition-group
      enter-active-class="transition transform ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200 transition transform"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <Alert
        v-for="notification in notifications"
        :notification="notification"
        :key="notification.id"
      />
    </transition-group>
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
    notifications() {
      return this.$store.state.notifications;
    }
  }
};
</script>
