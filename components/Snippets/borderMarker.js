import { styled } from "stitches.config.js";

const Component = () => {
    return (
        <Wrapper>
            <span>Hover me</span>
        </Wrapper>
    );
};

const Wrapper = styled("a", {
    position: "relative",
    cursor: "pointer",

    span: {
        position: "relative",
    },

    "&:before": {
        content: "",
        position: "absolute",
        left: "-0.1px",
        right: "-0.1px",
        bottom: 0,
        height: "100%",
        transform: "scaleY(.3)",
        transition: "transform .6s cubic-bezier(0.53, 0.21, 0, 1)",
        transformOrigin: "bottom",
        backgroundColor: "hsl(244, 63%, 69%)",
        opacity: "0.6",
    },

    "&:hover:before": {
        transform: "scaleY(1)",
    },
});

const stitchesStyling = `
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
        backgroundColor: "white",
        transformOrigin: "bottom right",
        transition: "transform .4s cubic-bezier(.86,0,.07,1)",
    },

    "&:hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
    },
});`;

const cssStyling = `
.exampleClass {
    display: inline-block;
    position: relative;
    color: white;
  }

  .exampleClass::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .exampleClass:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const scssStyling = `
.exampleClass {
    display: inline-block;
    position: relative;
    color: white;

	&:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: white;
		transform-origin: bottom right;
		transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
	  }

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
  }
`;

export { stitchesStyling, cssStyling, scssStyling, Component };
