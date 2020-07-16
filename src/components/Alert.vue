<template>
  <div class="fixed bottom-0 inset-x-0 flex">
    <div class="flex justify-center rounded-md mb-16 bg-green-100 p-4 mx-auto">
      <div class="flex-shrink-0">
        <svg
          class="h-5 w-5 text-green-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm leading-5 font-medium text-green-800">
          Copied to clipboard 🎉
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  mounted() {
    this.timeout = setTimeout(
      () => this.$store.dispatch("removeNotification", this.notification),
      2000
    );
  }
};
</script>
