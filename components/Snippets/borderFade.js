import { styled } from "stitches.config.js";

const Component = () => {
    return <Wrapper>Hover me</Wrapper>;
};

const Wrapper = styled("a", {
    display: "inline-block",
    position: "relative",
    color: "$white",
    cursor: "pointer",

    "&:after": {
        content: "",
        position: "absolute",
        height: 1,
        width: "100%",
        left: 0,
        top: "110%",
        opacity: 0,
        transform: "translateY(3px)",
        background: "$white",
        transition: "opacity 0.2s ease, transform 0.2s ease",
    },

    "&:hover::after": {
        opacity: 1,
        transform: "translateY(0)",
    },
});

const stitchesStyling = `
const ExampleWrapper = styled("a", {
    display: "inline-block",
    position: "relative",
    color: "white",
    cursor: "pointer",

    "&:after": {
        content: "",
        position: "absolute",
        height: 1,
        width: "100%",
        left: 0,
        top: "110%",
        opacity: 0,
        transform: "translateY(3px)",
        background: "white",
        transition: "opacity 0.2s ease, transform 0.2s ease",
    },

    "&:hover::after": {
        opacity: 1,
        transform: "translateY(0)",
    },
});`;

const cssStyling = `
.exampleClass {
    padding-bottom: 1px;
    color: white;
    position: relative;
}

.exampleClass::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(3px);
    background: white;
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.exampleClass:hover::after {
    opacity: 1;
    transform: translateY(0);
}
`;

const scssStyling = `
.exampleClass {
    padding-bottom: 1px;
    color: hsl(222, 25%, 14%);
    position: relative;

	&:after {
		content: '';
		position: absolute;
		height: 2px;
		width: 100%;
		left: 0;
		bottom: 0;
		opacity: 0;
		transform: translateY(3px);
		background: hsl(243, 80%, 62%);
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	&:hover::after {
		opacity: 1;
		transform: translateY(0);
	}
}
`;

export { stitchesStyling, cssStyling, scssStyling, Component };
