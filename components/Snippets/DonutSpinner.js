import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return <Wrapper></Wrapper>;
};

const donutSpin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

const Wrapper = styled('a', {
  display: 'inline-block',
  border: '4px solid rgba(255, 255, 255, 0.1)',
  borderLeftColor: '$white',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  animation: `${donutSpin} 1.2s linear infinite`
});

const cssStyling = `
@keyframes donut-spin {
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
}

.exampleBtn {
	display: inline-block;
	border: 4px solid rgba(255, 255, 255, 0.1);
	border-left-color: white;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	animation: donut-spin 1.2s linear infinite;
}
`;

const scssStyling = `
@keyframes donut-spin {
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
}

.exampleBtn {
	display: inline-block;
	border: 4px solid rgba(255, 255, 255, 0.1);
	border-left-color: white;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	animation: donut-spin 1.2s linear infinite;
}
`;

export { cssStyling, scssStyling, Component };
