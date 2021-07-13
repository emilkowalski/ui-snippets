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

const dotPulse = keyframes({
  '0%': { transform: 'scale(0)' },
  '50%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0)' }
});

const Wrapper = styled('div', {
  span: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '$white',
    animation: `${dotPulse} 1s infinite linear`,
    margin: '0 4px',
    display: 'inline-block'
  },

  'span:nth-child(2)': {
    'animation-delay': '0.2s'
  },

  'span:nth-child(3)': {
    'animation-delay': '0.3s'
  }
});

/*
const Wrapper = styled('div', {
  position: 'relative',
  width: '10px',
  height: '10px',
  borderRadius: '5px',
  backgroundColor: '$white',
  animation: `${dotPulse} 1s infinite linear`,
  animationDelay: '1s',

  '&::before, &::after': {
    content: '',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    backgroundColor: '$white',
    animation: `${dotPulse} 1.5s infinite linear`
  },

  '&::before': {
    left: '-10px',
    animationDelay: '1s'
  },

  '&::after': {
    left: '10px',
    animationDelay: '.8s'
  }
});
*/

export { Component };
