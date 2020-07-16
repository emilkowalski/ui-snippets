<template>
  <div
    class="grid row-gap-10 col-gap-10 py-20 sm:grid-cols-2 md:grid-cols-3 md:row-gap-20 lg:grid-cols-4 xl:grid-cols-5"
  >
    <Effect
      v-for="effect in effects"
      :key="effect.className"
      :effect="effect"
    />
  </div>
</template>

<script>
import Effect from "@/components/Effect";

export default {
  components: { Effect },
  props: {
    effects: {
      type: Array,
      required: true
    }
  }
};
</script>
