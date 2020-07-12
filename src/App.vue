<template>
  <div id="app" class="antialiased">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <h2 class="text-gray-900 text-xl font-medium mt-10 text-center">
        Click on the animation to copy the css
      </h2>
      <EffectsList :effects="effects" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import EffectsList from "@/components/EffectsList";
import rawCss from "@/styles";

export default {
  name: "App",
  components: {
    Header,
    EffectsList
  },
  computed: {
    effects() {
      return [
        {
          css: rawCss.borderLeftRight,
          className: "borderLeftRight",
          category: "text",
          html: "Hover me"
        },
        {
          css: rawCss.donutSpinner,
          className: "donutSpinner",
          category: "animation"
        },
        {
          css: rawCss.pulseBtn,
          className: "pulseBtn",
          category: "button",
          html: "Hover me"
        },
        {
          css: rawCss.siblingFade,
          className: "siblingFade",
          category: "text",
          html: "<span>Item 1 </span><span>Item 2 </span>"
        },
        {
          css: rawCss.radiusPulse,
          className: "radiusPulse",
          category: "button"
        },
        {
          css: rawCss.pressDownButton,
          className: "pressDownButton",
          category: "button",
          html: "Click me"
        },
        {
          css: rawCss.bouncingLoader,
          className: "bouncingLoader",
          category: "animation",
          html: "<div></div>"
        }
      ];
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
</style>
