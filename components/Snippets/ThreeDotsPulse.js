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

const stitchesStyling = `
const dotPulse = keyframes({
    '0%': { transform: 'scale(0)' },
    '50%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0)' }
  });
  
  const exampleWrapper = styled('div', {
    span: {
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      backgroundColor: '$white',
      animation: 'dotPulse 1s infinite linear',
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
`;

export { stitchesStyling, Component };
