import { styled } from 'stitches.config';

const SnippetsGridItem = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled('div', {
  height: 120,
  backgroundColor: '$darkGray',
  borderRadius: '$1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default SnippetsGridItem;
