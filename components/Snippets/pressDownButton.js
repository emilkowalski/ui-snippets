import { styled } from "stitches.config.js";

const Component = () => {
    return <Wrapper>I'm pulsing</Wrapper>;
};

const Wrapper = styled("a", {
    backgroundColor: "$white",
    padding: "12px 24px",
    color: "$black",
    borderRadius: 7,
    borderBottom: "4px solid hsl(241, 3%, 73%)",
    transition: "all 0.1s ease-in-out",
    cursor: "pointer",

    "&:hover": {
        borderBottomWidth: 0,
        borderTopWidth: 4,
    },
});

const stitchesStyling = `
const exampleWrapper = styled("a", {
    backgroundColor: "white",
    padding: "12px 24px",
    color: "black",
    borderRadius: 7,
    borderBottom: "4px solid hsl(241, 3%, 73%)",
    transition: "all 0.1s ease-in-out",	
    cursor: "pointer",

    "&:hover": {
        borderBottomWidth: 0,
        borderTopWidth: 4,
    },
});`;

const cssStyling = `
.exampleClass {
    padding: 12px 24px;
    background-color: black;
    color: white;
    border-radius: 7px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    animation: pulse 1.75s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes pulse {
    to {
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
    }
}
`;

const scssStyling = `
.exampleClass {
    padding: 12px 24px;
    background-color: black;
    color: white;
    border-radius: 7px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes pulse {
    to {
        box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
    }
}
`;

export { stitchesStyling, cssStyling, scssStyling, Component };
