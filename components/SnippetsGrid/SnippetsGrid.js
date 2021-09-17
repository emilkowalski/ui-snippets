import { styled } from 'stitches.config';

import snippets from 'components/Snippets';
import ContextMenu from 'components/ContextMenu';
import SnippetsGridItem from './SnippetsGridItem';

const SnippetsGrid = ({ children }) => {
  return (
    <Wrapper>
      {snippets.map(({ Component, cssStyling, scssStyling }) => (
        <ContextMenu cssStyling={cssStyling} scssStyling={scssStyling} key={cssStyling}>
          <SnippetsGridItem>
            <Component />
          </SnippetsGridItem>
        </ContextMenu>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'grid',
  gap: '$4',
  padding: '$4 0',

  '@bp2': {
    gridTemplateColumns: '1fr 1fr'
  },

  '@bp3': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
  }
});

export default SnippetsGrid;
