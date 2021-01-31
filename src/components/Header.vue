<template>
  <header class="py-8 flex justify-between">
    <a
      href="/css-effects-snippets"
      class="flex items-center font-bold text-2xl text-black"
    >
      <Logo class="h-6 w-auto" />
    </a>
    <div>
      <div class="flex space-x-5">
        <a
          href="https://github.com/emilkowalski/css-effects-snippets"
          class="text-black hover:underline"
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://twitter.com/emilkowalski_"
          class="text-black hover:underline"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "@/assets/icons/logo.svg";

export default {
  components: {
    Logo,
  }
};
</script>
