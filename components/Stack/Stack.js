import { styled } from 'stitches.config.js';

const Stack = styled('div', {
  '> * + *': {
    marginTop: '$5'
  }
});

export default Stack;
