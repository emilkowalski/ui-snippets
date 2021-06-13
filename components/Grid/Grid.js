import { styled } from "stitches.config";

import snippets from "@components/Snippets";
import GridItem from "./components/GridItem";
import ContextMenu from "@components/ContextMenu";

const Grid = ({ children }) => {
    return (
        <Wrapper>
            {snippets.map(({ component: Component, stitchesStyling, cssStyling, scssStyling }) => (
                <ContextMenu stitchesStyling={stitchesStyling} cssStyling={cssStyling} scssStyling={scssStyling} key={cssStyling}>
                    <GridItem key={stitchesStyling}>
                        <Component />
                    </GridItem>
                </ContextMenu>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "$4",
});

export default Grid;
