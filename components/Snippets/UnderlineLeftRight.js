import { styled } from "stitches.config.js";

const UnderlineLeftRight = () => {
    return <Wrapper>Hover me</Wrapper>;
};

export default UnderlineLeftRight;

const Wrapper = styled("a", {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",

    "&:after": {
        content: "",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "1px",
        top: "110%",
        left: "0",
        backgroundColor: "hsl(193, 95%, 71%)",
        transformOrigin: "bottom right",
        transition: "transform .4s cubic-bezier(.86,0,.07,1)",
    },

    "&:hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
    },
});

export const stitchesStyling = `
const Wrapper = styled("a", {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",

    "&:after": {
        content: "",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "1px",
        top: "110%",
        left: "0",
        backgroundColor: "hsl(193, 95%, 71%)",
        transformOrigin: "bottom right",
        transition: "transform .4s cubic-bezier(.86,0,.07,1)",
    },

    "&:hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
    },
});`;
