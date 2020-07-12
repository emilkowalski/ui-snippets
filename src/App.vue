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
          html: "I'm pulsing"
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
        },
        {
          css: rawCss.arrowFromLeft,
          className: "arrowFromLeft",
          category: "button",
          html:
            '<svg xmlns="http://www.w3.org/2000/svg" width="5.002" height="8.576" viewBox="0 0 5.002 8.576"><path d="M1.06,8.428a.5.5,0,0,1-.71,0l-.2-.2A.49.49,0,0,1,0,7.868V.708A.49.49,0,0,1,.15.348l.2-.2a.5.5,0,0,1,.71,0l3.79,3.79a.48.48,0,0,1,0,.7Z"/></svg><span>Hover me</span>'
        },
        {
          css: rawCss.borderFade,
          className: "borderFade",
          category: "text",
          html: "Hover me"
        },
        {
          css: rawCss.arrowBounce,
          className: "arrowBounce",
          category: "animation",
          html:
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"/></svg>'
        },
        {
          rawCss: rawCss.lineThrough,
          className: "lineThrough",
          category: "text",
          html: "Hover me"
        },
        {
          rawCss: rawCss.circleBtn,
          className: "circleBtn",
          category: "button",
          html: "<span>Hover me</span>"
        },
        {
          rawCss: rawCss.overlayLeftBtn,
          className: "overlayLeftBtn",
          category: "button",
          html: "<span>Hover me</span>"
        },
        {
          rawCss: rawCss.textTransformX,
          className: "textTransformX",
          category: "text",
          html: "Hover me"
        },
        {
          rawCss: rawCss.arrowScrollDown,
          className: "arrowScrollDown",
          category: "animation",
          html:
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"/></svg>'
        }
      ];
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
</style>
