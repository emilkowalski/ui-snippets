<template>
    <h4>Copied to clipboard.</h4>
</template>

<script>
export default {
  name: 'FlashMessage',
};
</script>

<style lang="scss" scoped>
    h4 {
        position: fixed;
        bottom: 60px;
        left: 50%;
        transform: translate(-50%);
        padding: 8px 20px;
        background: #3ECF8E;
        border-radius: 4px;
        color: #fff;
        text-shadow: 0 1px 3px rgba(36,180,126,.4);
        z-index: 99;

        @media (max-width: 1000px) {
            font-size: 1.5rem;
            bottom: 20px;
        }
    }
</style>
