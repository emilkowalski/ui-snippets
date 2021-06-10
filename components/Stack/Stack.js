import { styled } from "stitches.config.js";

const Stack = styled("div", {
    "> * + *": {
        marginTop: "$4",
    },
});

export default Stack;
