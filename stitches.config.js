import { createCss } from '@stitches/react';

export const { styled, getCssString, global, keyframes } = createCss({
  theme: {
    fonts: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
    },
    colors: {
      black: 'hsl(197, 8%, 8%)',
      white: 'hsl(241, 3%, 93%)',
      gray: 'hsl(208, 7%, 37%)',
      darkGray: 'hsl(197, 6%, 12%)',
      primary: 'hsl(193, 95%, 45%)'
    },
    fontWeights: {
      medium: '500',
      bold: '600'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px'
    },
    radii: {
      1: '7px'
    }
  },
  media: {
    bp1: '(min-width: 575px)',
    bp2: '(min-width: 750px)',
    bp3: '(min-width: 1000px)',
    bp4: '(min-width: 1200px)'
  }
});
