import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

const flashing = keyframes({
  '0%': {
    opacity: 0.2
  },
  '20%': {
    opacity: 1
  },
  '100%': {
    opacity: 0.2
  }
});

const Wrapper = styled('div', {
  span: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '$white',
    animation: `${flashing} 1.4s infinite linear`,
    margin: '0 4px',
    display: 'inline-block'
  },

  'span:nth-child(2)': {
    'animation-delay': '.2s'
  },

  'span:nth-child(3)': {
    'animation-delay': '.4s'
  }
});

const stitchesStyling = `
const flashing = keyframes({
  '0%': {
    opacity: 0.2
  },
  '20%': {
    opacity: 1
  },
  '100%': {
    opacity: 0.2
  }
});

const exampleWrapper = styled('div', {
  span: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '$white',
    animation: 'flashing 1.4s infinite linear',
    margin: '0 4px',
    display: 'inline-block'
  },

  'span:nth-child(2)': {
    'animation-delay': '.2s'
  },

  'span:nth-child(3)': {
    'animation-delay': '.4s'
  }
});`;

const cssStyling = `
.exampleClass span {
	width: 14px;
    height: 14px;
    borderRadius: 50%;
    backgroundColor: white;
    animation: flashing 1.4s infinite linear;
    margin: 0 4px;
    display: inline-block;
}

.exampleClass span:nth-child(2) {
  animation-delay: .2s;
}

.exampleClass span:nth-child(3) {
  animation-delay: .4s;
}

@keyframes flashing {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  },
  100% {
    opacity: 0.2;
  }
}
`;

const scssStyling = `
.exampleClass {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: white;
  color: white;
  animation: flashing 0.8s infinite linear alternate 0.4s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    color: white;
  }

  &::before {
    left: -21px;
    animation: flashing 0.8s infinite alternate;
  }

  &::after {
    left: 21px;
    animation: flashing 0.8s infinite alternate 0.8s;
  }
}

@keyframes flashing {
  0% {
    background-color: white;
  }
  50%,
  100% {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
`;

export { stitchesStyling, cssStyling, scssStyling, Component };
