import Container from 'components/Container';
import { styled } from 'stitches.config';

const Header = () => {
  return (
    <Wrapper as="header">
      <Logo href="/">UI Snippets</Logo>
      <LinksWrapper>
        <Link href="https://twitter.com/emilkowalski_" target="_blank">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M8.66 20c6.793 0 10.508-6.156 10.508-11.495 0-.175 0-.349-.01-.522A7.943 7.943 0 0021 5.892a6.883 6.883 0 01-2.121.635c.77-.504 1.348-1.298 1.624-2.234a7.03 7.03 0 01-2.346.98c-1.144-1.331-2.963-1.657-4.437-.794-1.473.862-2.234 2.699-1.856 4.48-2.97-.164-5.736-1.698-7.611-4.222-.98 1.846-.48 4.208 1.143 5.393a3.428 3.428 0 01-1.676-.506v.052c0 1.923 1.24 3.58 2.963 3.96a3.38 3.38 0 01-1.668.07c.484 1.645 1.87 2.772 3.45 2.805-1.307 1.124-2.923 1.734-4.586 1.733-.294-.001-.587-.02-.879-.059C4.689 19.371 6.654 20 8.66 19.997"></path>
          </svg>
        </Link>
        <Link href="https://github.com/emilkowalski/ui-snippets" target="_blank">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3c-4.973 0-9 4.13-9 9.228 0 4.083 2.576 7.532 6.154 8.754.45.081.618-.196.618-.438 0-.22-.01-.946-.01-1.719-2.262.427-2.847-.565-3.027-1.084-.101-.265-.54-1.084-.923-1.303-.315-.173-.764-.6-.01-.612.708-.011 1.214.67 1.383.946.81 1.396 2.104 1.004 2.621.762.079-.6.315-1.004.574-1.235-2.003-.23-4.095-1.026-4.095-4.556 0-1.003.349-1.834.922-2.48-.09-.23-.404-1.176.09-2.445 0 0 .754-.242 2.475.946a8.159 8.159 0 012.25-.312c.765 0 1.53.104 2.25.312 1.722-1.2 2.475-.946 2.475-.946.495 1.269.18 2.215.09 2.445.574.646.923 1.465.923 2.48 0 3.541-2.104 4.326-4.106 4.556.326.289.607.842.607 1.707 0 1.235-.011 2.227-.011 2.538 0 .242.169.53.619.438a9.036 9.036 0 004.439-3.366A9.402 9.402 0 0021 12.228C21 7.129 16.973 3 12 3z"></path>
          </svg>
        </Link>
      </LinksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Container, {
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

const Logo = styled('a', {
  background:
    'linear-gradient(118deg, rgba(106,225,255,1) 0%, rgba(194,158,218,1) 80%, rgba(91,105,230,1) 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  fontSize: '20px',
  fontWeight: '$bold',
  display: 'inline-block'
});

const Link = styled('a', {
  color: '$white',
  opacity: 0.6,
  transition: 'opacity 0.2s ease',

  '&:hover': {
    opacity: 1
  }
});

const LinksWrapper = styled('div', {
  display: 'flex',
  gap: 20
});

export default Header;
