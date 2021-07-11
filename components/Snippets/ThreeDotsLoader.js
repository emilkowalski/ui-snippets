import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return <Wrapper />;
};

const flashing = keyframes({
  '0%': { backgroundColor: '$white' },
  '50%, 100%': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
});

const Wrapper = styled('div', {
  position: 'relative',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '$white',
  color: '$white',
  animation: `${flashing} 0.8s infinite linear alternate .4s`,

  '&::after, &::before': {
    content: '',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '$white',
    color: '$white'
  },
  '&::before': {
    left: '-21px',
    animation: `${flashing} 0.8s infinite alternate`
  },

  '&::after': {
    left: '21px',
    animation: `${flashing} 0.8s infinite alternate .8s`
  }
});

const stitchesStyling = `
const flashing = keyframes({
  '0%': { backgroundColor: '$white' },
  '50%, 100%': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
});

const exampleWrapper = styled('div', {
  position: 'relative',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: 'white',
  color: 'white',
  animation: 'flashing 0.8s infinite linear alternate .4s',

  '&::after, &::before': {
    content: '',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: 'white'
  },
  '&::before': {
    left: '-21px',
    animation: 'flashing 0.8s infinite alternate'
  },

  '&::after': {
    left: '21px',
    animation: 'flashing 0.8s infinite alternate .8s'
  }
});`;

export { stitchesStyling, Component };
