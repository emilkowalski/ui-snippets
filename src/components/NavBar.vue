<template>
    <div class="wrapper">
        <h1>CSSanimationSnipets<span>.</span></h1>
        <div class="links">
            <a href="https://github.com/emilkowalski/css-animation-snippets">Github</a>
            <a href="#">Share your ideas!</a>
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
    }

    h1 {
        font-size: 2.6rem;
        display: inline-block;

        span {
            color: #5878F3;
        }
    }
    a {
        display: inline-block;
        color: #D8ECF6;
        font-size: 1.6rem;
        border-radius: 4rem;
        background: #5878F3;
        width: 16rem;
        padding: 1rem 0;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);

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
        }
    }
</style>
