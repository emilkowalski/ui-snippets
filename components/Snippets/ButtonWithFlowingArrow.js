import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <span>
        <span>Hover me</span>
      </span>
    </Wrapper>
  );
};

const MoveRightInitial = keyframes({
  '100%': { transform: 'translate3d(105%,0,0)' }
});

const MoveRightEnd = keyframes({
  '0%': { transform: 'translate3d(-100%,0,0)' },
  '100%': { transform: 'translate3d(0,0,0)' }
});

const Wrapper = styled('button', {
  position: 'relative',
  padding: '12px 24px',
  backgroundColor: '$white',
  color: '$black',
  borderRadius: '$1',
  cursor: 'pointer',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: '1rem',
  overflow: 'hidden',
  transition: 'color .2s',

  '&::before, &::after': {
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    content: '',
    backgroundColor: 'hsl(244, 63%, 69%)'
  },

  '&::before': {
    width: '135%',
    clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%)',
    transform: 'translate3d(-100%,0,0)'
  },

  '&::after': {
    width: '105%',
    transform: 'translate3d(100%,0,0)',
    transition: 'transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)'
  },

  '&:hover': {
    color: '$white',
    '&::before': {
      transform: 'translate3d(0,0,0)',
      transition: 'transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)'
    },

    '&::after': {
      transform: 'translate3d(0,0,0)',
      transition: 'transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1)'
    },

    span: {
      animation: `${MoveRightInitial} 0.1s forwards, ${MoveRightEnd} 0.3s forwards 0.2s`
    }
  },

  '& > span': {
    overflow: 'hidden'
  },

  span: {
    display: 'block',
    position: 'relative',
    zIndex: 1
  }
});

const stitchesStyling = `
const MoveRightInitial = keyframes({
  '100%': { transform: 'translate3d(105%,0,0)' }
});

const MoveRightEnd = keyframes({
  '0%': { transform: 'translate3d(-100%,0,0)' },
  '100%': { transform: 'translate3d(0,0,0)' }
});

const exampleWrapper = styled('button', {
  position: 'relative',
  padding: '12px 24px',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '7px',
  cursor: 'pointer',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: '1rem',
  overflow: 'hidden',
  transition: 'color .2s',

  '&::before, &::after': {
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    content: '',
    backgroundColor: 'hsl(244, 63%, 69%)'
  },

  '&::before': {
    width: '135%',
    clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%)',
    transform: 'translate3d(-100%,0,0)'
  },

  '&::after': {
    width: '105%',
    transform: 'translate3d(100%,0,0)',
    transition: 'transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)'
  },

  '&:hover': {
    color: '$white',
    '&::before': {
      transform: 'translate3d(0,0,0)',
      transition: 'transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)'
    },

    '&::after': {
      transform: 'translate3d(0,0,0)',
      transition: 'transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1)'
    },

    span: {
      animation: 'MoveRightInitial 0.1s forwards, MoveRightEnd 0.3s forwards 0.2s'
    }
  },

  '& > span': {
    overflow: 'hidden'
  },

  span: {
    display: 'block',
    position: 'relative',
    zIndex: 1
  }
});
`;

const cssStyling = `
.exampleClass {
  position: relative;
  padding: 12px 24px;
  background-color: white;
  color: black;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  overflow: hidden;
  transition: color 0.2s;
}

.exampleClass::before,
.exampleClass::after {
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  content: '';
  background-color: hsl(244, 63%, 69%);
}

.exampleClass::before {
  width: 135%;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
  transform: translate3d(-100%, 0, 0);
}

.exampleClass::after {
  width: 105%;
  transform: translate3d(100%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.exampleClass:hover {
  color: white;
}

.exampleClass:hover::before {
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.exampleClass:hover::after {
  transform: translate3d(0, 0, 0);
  transition: transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.exampleClass:hover span {
  animation: MoveRightInitial 0.1s forwards, MoveRightEnd 0.3s forwards 0.2s;
}

.exampleClass > span {
  overflow: hidden;
}

.exampleClass span {
  display: block;
  position: relative;
  z-index: 1;
}
`;

const scssStyling = `
.exampleClass {
  position: relative;
  padding: 12px 24px;
  background-color: white;
  color: black;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  overflow: hidden;
  transition: color 0.2s;

  &::before,
  &::after {
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    content: '';
    background-color: hsl(244, 63%, 69%);
  }

  &::before {
    width: 135%;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
    transform: translate3d(-100%, 0, 0);
  }

  &::after {
    width: 105%;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }

  &:hover {
    color: white;

    &::before {
      transform: translate3d(0, 0, 0);
      transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    }

    &::after {
      transform: translate3d(0, 0, 0);
      transition: transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    }

    span {
      animation: MoveRightInitial 0.1s forwards, MoveRightEnd 0.3s forwards 0.2s;
    }
  }

  & > span {
    overflow: hidden;
  }

  span {
    display: block;
    position: relative;
    z-index: 1;
  }
}
`;

export { stitchesStyling, cssStyling, scssStyling, Component };
