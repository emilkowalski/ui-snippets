import * as HoverCard from '@radix-ui/react-hover-card';
import Image from 'next/image';
import { encode } from 'qss';
import { useEffect, useState } from 'react';
import { keyframes } from 'stitches.config';
import * as Portal from '@radix-ui/react-portal';

import { styled } from 'stitches.config';

const LinkPreview = ({ url, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  const previewImage = {
    width: 200,
    height: 128,
    quality: 50,
    layout: 'fixed'
  };

  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: 'screenshot.url',
    colorScheme: 'dark'
  });

  const screenshot = `https://api.microlink.io/?${params}`;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <HoverCard.Root openDelay={100} closeDelay={100}>
      {isMounted ? (
        <Portal.Root>
          <Hidden>
            <Image
              alt={`Screenshot of ${url}`}
              src={screenshot}
              width={previewImage.width}
              height={previewImage.height}
              layout={previewImage.layout}
              priority={true}
            />
          </Hidden>
        </Portal.Root>
      ) : null}
      <HoverCardTrigger href={url} target="_blank">
        {children}
      </HoverCardTrigger>
      <HoverCardContent side="top" sideOffset={5}>
        <StyledImage
          alt={`Screenshot of ${url}`}
          src={screenshot}
          width={previewImage.width}
          height={previewImage.height}
          layout={previewImage.layout}
          priority={true}
        />
      </HoverCardContent>
    </HoverCard.Root>
  );
};

export default LinkPreview;

const reveal = keyframes({
  '0%': { transform: 'scale(0.9)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 }
});

const HoverCardContent = styled(HoverCard.Content, {
  borderRadius: '$1',
  padding: '8px 8px 5px 8px',
  fontSize: 14,
  backgroundColor: '$white',
  color: 'black',
  animation: `${reveal} 0.1s ease`
});

const HoverCardTrigger = styled(HoverCard.Trigger, {
  textDecoration: 'none',
  color: '$white',
  display: 'inline-block',
  fontWeight: '$medium'
});

const StyledImage = styled(Image, {
  borderRadius: '$1',
  boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
});

const Hidden = styled('div', {
  display: 'none'
});
