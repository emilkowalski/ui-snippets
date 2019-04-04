<template>
  <!-- eslint-disable max-len -->
    <div class="pagination">
      <span v-if="this.currentPage >= 2 && this.pagesAmount > this.currentPage-1" @click="onPreviousPageClicked">Previous page</span>
      <span v-if="this.pagesAmount > this.currentPage" @click="onNextPageClicked">Next page</span>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: Number,
    pagesAmount: Number,
  },
  methods: {
    onNextPageClicked() {
      this.$emit('next-page-click');
    },
    onPreviousPageClicked() {
      this.$emit('previous-page-click');
    },
  },
};
</script>

<style lang="scss" scoped>
  .pagination {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);

    span {
      margin: 0;
      padding: 0;
      cursor: pointer;
      font-size: 20px;

      @media (max-width: 992px) {
      font-size: 16px;
    }

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
