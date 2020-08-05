<template>
  <header class="py-8 flex justify-between">
    <a
      href="/css-effects-snippets"
      class="flex items-center font-bold text-2xl text-black"
    >
      <Logo class="h-6 w-auto" />
    </a>
    <div>
      <div class="flex space-x-3">
        <a
          href="https://github.com/emilkowalski/css-effects-snippets"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          <Github class="h-auto w-auto fill-current mr-2" />
          Github
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "@/assets/icons/logo.svg";
import Github from "@/assets/icons/github-icon.svg";

export default {
  components: {
    Logo,
    Github
  }
};
</script>
