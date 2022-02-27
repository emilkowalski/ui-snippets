import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return (
      <Wrapper>
        Hover over me
      </Wrapper>
  );
};

const coverOver = keyframes({
  "0%": {
    transformOrigin: "50% 100%",
    transform: "scale3d(1, 0.05, 1)",
  },
  "50%": {
    transformOrigin: "50% 100%",
    transform: "scale3d(1, 1, 1)",
  },
  "51%": {
    transformOrigin: "50% 0%",
    transform: "scale3d(1, 1, 1)",
  },
  "100%": {
    transformOrigin: "50% 0%",
    transform: "scale3d(1, 0.05, 1)",
  },
});

const Wrapper = styled('a', {
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '1px',
    backgroundColor: 'hsl(244, 63%, 69%)',
    top: '100%',
    left: 0,
    pointerEvents: 'none'
  },

  '&:before': {
    height: '100%',
    top: 0,
    opacity: 0
  },

  '&:hover:before': {
    opacity: 1,
    animation: `${coverOver} 0.35s cubic-bezier(.77,0,.175,1) forwards`
  },

  '&:after': {
    transition: 'opacity 0.25s'
  },

  '&:hover:after': {
    opacity: 0
  }
});

const cssStyling = `
  .exampleClass {
    display: inline-block;
    position: relative;
  }

  .exampleClass:before, .exampleClass:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: hsl(244, 63%, 69%);
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  .exampleClass:before {
    height: 100%;
    top: 0;
    opacity: 0;
  }

  .exampleClass:hover:before {
    opacity: 1;
    animation: coverOver 0.35s cubic-bezier(.77,0,.175,1) forwards;
  }

  .exampleClass:after {
    transition: opacity 0.25s;
  }

  .exampleClass:hover:after {
    opacity: 0;
  }

  @keyframes coverOver {
    0% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 0.05, 1);
    }

    50% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 1, 1);
    }

    51% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 1, 1);
    }

    100% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 0.05, 1);
    }
  }
`;

const scssStyling = `
@keyframes coverOver {
	0% {
		transform-origin: 50% 100%;
		transform: scale3d(1, 0.05, 1);
	}
	50% {
		transform-origin: 50% 100%;
		transform: scale3d(1, 1, 1);
	}
	51% {
		transform-origin: 50% 0%;
		transform: scale3d(1, 1, 1);
	}
	100% {
		transform-origin: 50% 0%;
		transform: scale3d(1, 0.05, 1);
	}
}

.exampleClass {
	display: inline-block;
	position: relative;
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: hsl(244, 63%, 69%);
		top: 100%;
		left: 0;
		pointer-events: none;
		height: 100%;
		top: 0;
		opacity: 0;
	}
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: hsl(244, 63%, 69%);
		top: 100%;
		left: 0;
		pointer-events: none;
		transition: opacity 0.25s;
	}
	&:hover {
		&:before {
			opacity: 1;
			animation: coverOver 0.35s cubic-bezier(.77,0,.175,1) forwards;
		}
		&:after {
			opacity: 0;
		}
	}
}
`;

export { cssStyling, scssStyling, Component };
