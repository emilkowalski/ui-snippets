import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover over me</Wrapper>;
};

const Wrapper = styled('a', {
  padding: '12px 24px',
  color: '$black',
  transition: 'transform 0.15s',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,

  '&:after': {
    content: '',
    backgroundColor: 'white',
    transition: 'transform 0.15s',
    borderRadius: 7,
    position: 'absolute',
    inset: 0,
    zIndex: '-1'
  },

  '&:hover:after': {
    transform: 'scale(1.1)'
  }
});

const cssStyling = `
.exampleClass {
	padding: 12px 24px;
	color: black;
	transition: transform 0.15s;
	cursor: pointer;
	position: relative;
	z-index: 1;
}

.exampleClass::after {
	content: '';
    background-color: white;
    transition: transform 0.15s;
    border-radius: 7px;
    position: absolute;
    inset: 0;
    z-index: -1;
}

.exampleClass:hover::after {
	transform: scale(1.1);
}
`;

const scssStyling = `
.exampleClass {
	padding: 12px 24px;
	color: black;
	transition: transform 0.15s;
	cursor: pointer;
	position: relative;
	z-index: 1;

	&:after {
		content: '';
		background-color: white;
		transition: transform 0.15s;
		border-radius: 7px;
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	&:hover::after {
		transform: scale(1.1);
	}
}
`;

export { cssStyling, scssStyling, Component };
