<template>
  <header class="py-8 flex justify-between">
    <a href="/" class="flex items-center font-bold text-2xl text-black">
      <BaseIcon class="h-6 w-40" icon="logo" />
    </a>
    <div>
      <a
        href="/"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
      >
        Share your ideas
      </a>
    </div>
  </header>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";

export default {
  components: {
    BaseIcon
  }
};
</script>
