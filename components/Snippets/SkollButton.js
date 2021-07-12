import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return (
    <Button>
      <span>
        <span>Hover</span>
      </span>
    </Button>
  );
};

const MoveUpInitial = keyframes({
  to: {
    transform: 'translate3d(0,-105%,0)'
  }
});

const MoveUpEnd = keyframes({
  from: {
    transform: 'translate3d(0,100%,0)'
  },
  to: {
    transform: 'translate3d(0,0,0)'
  }
});

const Button = styled('button', {
  overflow: 'hidden',
  borderRadius: '50%',
  color: '$white',
  width: '80px',
  height: '80px',
  padding: '0',
  cursor: 'pointer',
  border: 'none',
  position: 'relative',
  display: 'inline-block',
  backgroundColor: '$black',
  font: '1rem inherit',

  '&::before': {
    content: '',
    background: '$white',
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    borderRadius: '50%',
    transform: 'translate3d(0,0,0)',
    transition: 'transform 0.3s',
    'transition-timing-function': 'cubic-bezier(0.7, 0, 0.2, 1)',
    position: 'absolute',
    top: 0,
    left: 0
  },

  '&:hover::before': {
    transform: 'translate3d(0,100%,0)'
  },

  span: {
    display: 'block',
    position: 'relative'
  },

  '& > span': {
    overflow: 'hidden',
    'mix-blend-mode': 'difference'
  },

  '&:hover > span > span': {
    animation: `${MoveUpInitial} 0.2s forwards, ${MoveUpEnd} 0.2s forwards 0.2s`
  }
});

export { Component };
