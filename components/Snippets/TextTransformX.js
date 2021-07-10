import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover me</Wrapper>;
};

const Wrapper = styled('a', {
  color: '$white',
  transition: 'transform 0.2s ease, color 0.2s ease',
  cursor: 'pointer',

  '&:hover': {
    transform: 'translateX(4px)',
    color: 'hsl(244, 63%, 69%)'
  }
});

const stitchesStyling = `
const exampleWrapper = styled("a", {
	color: "white",
    transition: "transform 0.2s ease, color 0.2s ease",
    cursor: "pointer",

    "&:hover": {
        transform: "translateX(4px)",
        color: "hsl(244, 63%, 69%)",
    },
});`;

const cssStyling = `
.exampleClass {
	color: white;
    transition: transform 0.2s ease, color 0.2s ease;
}

.exampleClass:hover {
	transform: translateX(4px);
	color: hsl(243, 80%, 62%);
}
`;

const scssStyling = `
.exampleClass {
	color: white;
    transition: transform 0.2s ease, color 0.2s ease;

	&:hover {
		transform: translateX(4px);
		color: hsl(243, 80%, 62%);
	}
}
`;

export { stitchesStyling, cssStyling, scssStyling, Component };
