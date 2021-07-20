import { styled } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper href="#">
      Hover
      <svg viewBox="0 0 70 36">
        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled('span', {
  display: 'inline-block',
  position: 'relative',
  color: '$white',
  cursor: 'pointer',
  padding: '1.5px',

  svg: {
    width: '76px',
    height: '40px',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%, 7px) translateZ(0)',
    fill: 'none',
    stroke: '#BBC1E1',
    'stroke-linecap': 'round',
    'stroke-width': '2px',
    'stroke-dasharray': '69px 278px',
    'stroke-dashoffset': '361px',
    transition: 'stroke .25s ease 0s, stroke-dasharray .35s'
  },

  '&:hover svg': {
    stroke: 'hsl(244, 63%, 69%)',
    'stroke-dasharray': '180px 278px',
    transition: 'stroke .25s ease .1s, stroke-dasharray .35s'
  }
});

export { Component };
