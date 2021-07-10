import { styled, keyframes } from 'stitches.config';
import { createToast } from 'vercel-toast';
import * as RadixContextMenu from '@radix-ui/react-context-menu';

const timeout = 3000;

const ContextMenu = ({ children, stitchesStyling, cssStyling, scssStyling }) => {
  const copyToClipboard = async (styling) => {
    try {
      await navigator.clipboard.writeText(styling);

      createToast('Copied styles to clipboard', {
        timeout
      });
    } catch {
      createToast('Failed to copy', {
        timeout,
        type: 'error'
      });
    }
  };

  return (
    <RadixContextMenu.Root>
      <RadixContextMenu.Trigger>{children}</RadixContextMenu.Trigger>
      <Content>
        <Item onSelect={() => copyToClipboard(cssStyling)}>CSS</Item>
        <Item onSelect={() => copyToClipboard(scssStyling)}>SCSS</Item>
        <Item onSelect={() => copyToClipboard(stitchesStyling)}>Stitches</Item>
      </Content>
    </RadixContextMenu.Root>
  );
};

export default ContextMenu;

const reveal = keyframes({
  '0%': { transform: 'scale(0.9)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 }
});

const Content = styled(RadixContextMenu.Content, {
  minWidth: 160,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow: '0px 5px 15px -5px hsla(206,22%,7%,.15)',
  transformOrigin: 'var(--radix-context-menu-content-transform-origin)',
  animation: `${reveal} 0.1s ease`
});

const Separator = styled(RadixContextMenu.Separator, {
  height: 1,
  background: 'hsl(208, 18%, 92%)',
  margin: 4
});

const Wrapper = styled(RadixContextMenu.Root, {
  minWidth: 160,
  background: '$white',
  borderRadius: '$1',
  padding: 4
});

const Item = styled(RadixContextMenu.Item, {
  fontSize: 13,
  padding: '5px 10px',
  borderRadius: '$1',
  cursor: 'default',
  height: 28,
  padding: '4px 8px',
  color: '$gray',

  '&:focus': {
    outline: 'none',
    backgroundColor: 'hsl(207, 11%, 96%)',
    color: '$darkGray'
  }
});
