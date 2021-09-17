import { styled } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <span>Hover over me</span>
    </Wrapper>
  );
};

const Wrapper = styled('a', {
  position: 'relative',
  cursor: 'pointer',

  span: {
    position: 'relative'
  },

  '&:before': {
    content: '',
    position: 'absolute',
    left: '-0.1px',
    right: '-0.1px',
    bottom: 0,
    height: '100%',
    transform: 'scaleY(.3)',
    transition: 'transform .6s cubic-bezier(0.53, 0.21, 0, 1)',
    transformOrigin: 'bottom',
    backgroundColor: 'hsl(244, 63%, 69%)',
    opacity: '0.6'
  },

  '&:hover:before': {
    transform: 'scaleY(1)'
  }
});

const cssStyling = `
.exampleClass {
	position: relative;
  }

.exampleClass span {
	position: relative;
}

.exampleClass::before {
	content: "";
	position: absolute;
	left: -0.1px;
	right: -0.1px;
	bottom: 0;
	height: 100%;
	transform: scaleY(.3);
	transition: transform .6s cubic-bezier(0.53, 0.21, 0, 1);
	transform-origin: bottom;
	background-color: hsl(244, 63%, 69%);
	opacity: 0.6;
}

.exampleClass:hover::before {
	transform: scaleY(1);
}
`;

const scssStyling = `
.exampleClass {
	position: relative;

	span {
		position: relative;
	}

	&:before {
		content: "";
		position: absolute;
		left: -0.1px;
		right: -0.1px;
		bottom: 0;
		height: 100%;
		transform: scaleY(.3);
		transition: transform .6s cubic-bezier(0.53, 0.21, 0, 1);
		transform-origin: bottom;
		background-color: hsl(244, 63%, 69%);
		opacity: 0.6;
	}

	&:hover:before {
		transform: scaleY(1);
	}
  }
`;

export { cssStyling, scssStyling, Component };
