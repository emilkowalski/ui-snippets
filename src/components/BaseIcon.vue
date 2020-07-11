<template>
  <svg :viewBox="iconViewBox">
    <path
      v-for="(path, index) in iconPaths"
      :key="index"
      :d="path.path"
      :fill="path.fill ? path.fill : null"
    />
  </svg>
</template>

<script>
import icons from "@/assets/icons";

export default {
  props: {
    icon: {
      type: [String, Array]
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    iconPaths() {
      return icons[this.icon].paths;
    },
    iconViewBox() {
      return icons[this.icon].viewBox ? icons[this.icon].viewBox : this.viewBox;
    }
  }
};
</script>
