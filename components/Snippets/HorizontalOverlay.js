import { styled } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <span>Hover over me</span>
    </Wrapper>
  );
};

const Wrapper = styled('a', {
  overflow: 'hidden',
  padding: '12px 24px',
  borderRadius: '$1',
  backgroundColor: '$white',
  color: '$black',
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',

  span: {
    position: 'relative',
    transition: 'color 0.6s cubic-bezier(0.53, 0.21, 0, 1)'
  },

  '&:before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'hsl(244, 63%, 69%)',
    transform: 'scaleX(0)',
    transformOrigin: '100% 100%',
    transition: 'transform 0.6s cubic-bezier(0.53, 0.21, 0, 1)'
  },

  '&:hover::before': {
    transformOrigin: ' 0 0',
    transform: 'scaleX(1)'
  },

  '&:hover span': {
    color: '$white'
  }
});

const cssStyling = `
.exampleClass {
	overflow: hidden;
    padding: 12px 24px;
    border-radius: 7px;
    background-color: white;
    color: black;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.exampleClass span {
	position: relative;
	transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
},

.exampleClass:before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: hsl(244, 63%, 69%);
	transform: scaleX(0);
	transform-origin: 100% 100%;
	transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
},

.exampleClass:hover::before {
	transform-origin: 0 0;
	transform: scaleX(1);
},

.exampleClass:hover span {
	color: white;
},
`;

const scssStyling = `
.exampleClass {
	overflow: hidden;
    padding: 12px 24px;
    border-radius: 7px;
    background-color: white;
    color: black;
    position: relative;
    display: inline-block;
    cursor: pointer;

	span {
		position: relative;
		transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
	}

	&:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: hsl(244, 63%, 69%);
		transform: scaleX(0);
		transform-origin: 100% 100%;
		transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
	}

	&:hover {
		&:before {
			transform-origin: 0 0;
			transform: scaleX(1);
		}

		span {
			color: white;
		}
	}
}
`;

export { cssStyling, scssStyling, Component };
