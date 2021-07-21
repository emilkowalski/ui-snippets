import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper data-text="Hover me">
      <span>Hover me</span>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',

  span: {
    display: 'inline-block',
    transition: 'transform 0.3s cubic-bezier(0.5, 0.5, 0.3, 1)'
  },

  '&::after': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    content: 'attr(data-text)',
    transformOrigin: '100% 50%',
    transform: 'translate3d(150%, 0, 0)',
    transition: 'transform 0.3s cubic-bezier(0.5, 0.5, 0.3, 1)'
  },

  '&:hover::after': {
    transform: 'translate3d(0, 0, 0)'
  },
  '&:hover span': {
    transform: 'translate3d(-150%, 0, 0)'
  }
});

const stitchesStyling = `
const exampleWrapper = styled('div', {
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
  
    span: {
      display: 'inline-block',
      transition: 'transform 0.3s cubic-bezier(0.5, 0.5, 0.3, 1)'
    },
  
    '&::after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      content: 'attr(data-text)',
      transformOrigin: '100% 50%',
      transform: 'translate3d(150%, 0, 0)',
      transition: 'transform 0.3s cubic-bezier(0.5, 0.5, 0.3, 1)'
    },
  
    '&:hover::after': {
      transform: 'translate3d(0, 0, 0)'
    },
    '&:hover span': {
      transform: 'translate3d(-150%, 0, 0)'
    }
  });
`;

export { stitchesStyling, Component };
