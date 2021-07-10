import { styled } from "stitches.config";

import snippets from "components/Snippets";
import GridItem from "./components/GridItem";
import ContextMenu from "components/ContextMenu";

const Grid = ({ children }) => {
    return (
        <Wrapper>
            {snippets.map(({ Component, cssStyling, scssStyling, stitchesStyling }) => (
                <ContextMenu cssStyling={cssStyling} scssStyling={scssStyling} stitchesStyling={stitchesStyling} key={stitchesStyling}>
                    <GridItem>
                        <Component />
                    </GridItem>
                </ContextMenu>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled("div", {
    display: "grid",
    gap: "$4",
    padding: "$4 0",

    "@bp2": {
        gridTemplateColumns: "1fr 1fr",
    },

    "@bp3": {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
});

export default Grid;
