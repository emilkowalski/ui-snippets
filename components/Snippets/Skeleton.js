import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return <Wrapper></Wrapper>;
};

const loading = keyframes({
  '0%': { backgroundPosition: '200% 0' },
  '100%': { backgroundPosition: '-200% 0' }
});

const Wrapper = styled('div', {
  width: 120,
  borderRadius: '$1',
  height: 44,
  backgroundImage:
    'linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%))',
  backgroundSize: '400% 100%',
  animation: `${loading} 8s ease-in-out infinite`
});

const cssStyling = `
.exampleClass {
	width: 120px;
	border-radius: 6px;
	height: 44px;
	background-image: linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%));
	background-size: 400% 100%;
	animation: loading 8s ease-in-out infinite;
}

@keyframes loading {
	from {
		background-position: 200% 0;
	}
    to {
		background-position: -200% 0;
    }
}
`;

const scssStyling = `
.exampleClass {
	width: 120px;
	border-radius: 6px;
	height: 44px;
	background-image: linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%));
	background-size: 400% 100%;
	animation: loading 8s ease-in-out infinite;
}

@keyframes loading {
	from {
		background-position: 200% 0;
	}
    to {
		background-position: -200% 0;
    }
}
`;

export { cssStyling, scssStyling, Component };
