import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return (
    <Button>
      <Text>Hover me</Text>
    </Button>
  );
};

const Button = styled('button', {
  cursor: 'pointer',
  border: 'none',
  position: 'relative',
  padding: '12px 24px',
  fontSize: 'inherit',
  background: 'none',
  fontFamily: 'inherit',

  '&::before': {
    content: '',
    position: 'absolute',
    borderRadius: '$1',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$white',
    'clip-path': 'polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%)',
    transition: 'clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1)',
    zIndex: 0
  },

  '&:hover::before': {
    'clip-path': 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
  },

  '&:hover span': {
    transform: 'translate3d(-10px,0,0)'
  }
});

const Text = styled('span', {
  display: 'block',
  'mix-blend-mode': 'difference',
  transition: 'transform .4s cubic-bezier(0.2, 1, 0.8, 1)',
  color: 'darkgray'
});

const stitchesStyling = `
const exampleButton = styled('button', {
    cursor: 'pointer',
    border: 'none',
    position: 'relative',
    padding: '12px 24px',
    fontSize: 'inherit',
    background: 'none',
    fontFamily: 'inherit',

    span: {
        display: 'block',
        'mix-blend-mode': 'difference',
        transition: 'transform .4s cubic-bezier(0.2, 1, 0.8, 1)',
        color: 'darkgray'
    }
  
    '&::before': {
      content: '',
      position: 'absolute',
      borderRadius: '$1',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '$white',
      'clip-path': 'polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%)',
      transition: 'clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1)',
      zIndex: 0
    },
  
    '&:hover::before': {
      'clip-path': 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
    },
  
    '&:hover span': {
      transform: 'translate3d(-10px,0,0)'
    }
  });
`;

export { stitchesStyling, Component };
