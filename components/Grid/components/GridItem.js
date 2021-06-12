import { styled } from "stitches.config";

import ContextMenu from "@components/ContextMenu";

const GridItem = ({ children, stitchesStyling }) => {
    return (
        <ContextMenu stitchesStyling={stitchesStyling}>
            <Wrapper>{children}</Wrapper>
        </ContextMenu>
    );
};

const Wrapper = styled("div", {
    height: 120,
    backgroundColor: "$darkGray",
    borderRadius: "$2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export default GridItem;