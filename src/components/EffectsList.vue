<template>
  <div class="grid grid-cols-5 gap-10 py-20">
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
