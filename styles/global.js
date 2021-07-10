import { global } from 'stitches.config';

export const globalStyles = global({
  body: {
    backgroundColor: '$black',
    color: '$white',
    fontFamily: '$sans',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  '*': {
    boxSizing: 'border-box'
  },
  '.toast-container': {
    bottom: 20
  }
});
