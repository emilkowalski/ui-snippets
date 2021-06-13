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
        height: 1,
        top: "110%",
        left: 0,
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
const ExampleWrapper = styled("a", {
    display: "inline-block",
    position: "relative",

    "&:after": {
        content: "",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: 1,
        top: "110%",
        left: 0,
        backgroundColor: "hsl(193, 95%, 71%)",
        transformOrigin: "bottom right",
        transition: "transform .4s cubic-bezier(.86,0,.07,1)",
    },

    "&:hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
    },
});`;

export const cssStyling = `
.exampleClass {
    display: inline-block;
    position: relative;
    color: hsl(222, 25%, 14%);
  }

  .exampleClass::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .exampleClass:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const scssStyling = `
.exampleClass {
    display: inline-block;
    position: relative;
    color: hsl(222, 25%, 14%);

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: hsl(243, 80%, 62%);
		transform-origin: bottom right;
		transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
	  }

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
  }
`;
