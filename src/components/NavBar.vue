<template>
    <div class="wrapper">
        <div class="title">
          <a href="/css-effects-snippets/">CSSeffectsSnippets<span>.</span></a>
        </div>
        <div class="links">
            <a href="https://github.com/emilkowalski/css-animation-snippets" target="_blank">Github</a>
            <a href="https://github.com/emilkowalski/css-animation-snippets/issues/new" target="_blank">Share your ideas!</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4rem 0;

        @media (max-width: 1000px) {
            flex-direction: column;
            width: 90%;
            padding: 2.5rem 0;
        }
    }

    .title {
      a {
        font-size: 2.6rem;
        display: inline-block;
        color: #474E51;
        text-decoration: none;
        font-weight: bold;

        @media (max-width: 1000px) {
          margin-top: 0;
          margin-bottom: 2.5rem;
        }

        span {
          color: #5878F3;
        }
      }
    }

    .links {
      a {
        display: inline-block;
        color: #D8ECF6;
        font-size: 1.6rem;
        border-radius: 0.4rem;
        background: #5878F3;
        width: 16rem;
        padding: 1rem 0;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
        font-weight: 400;

        @media (max-width: 1000px) {
          display: block;
        }

        &:last-of-type {
          background: #fff;
          color: #5878F3;

          &:hover {
            background: darken(#fff, 3);
            color: #5878F3;
          }
        }

        &:hover {
          background: lighten(#5878F3, 3);
          color: lighten(#D8ECF6, 3);
        }

        &:not(:last-child) {
          margin-right: 5rem;

          @media (max-width: 1000px) {
            margin-right: 0;
          }
        }

        &:not(:first-child) {
          @media (max-width: 1000px) {
            margin-top: 1.5rem;
          }
        }
      }
    }

</style>
