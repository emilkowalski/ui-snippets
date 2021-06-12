// TODO: Temporary component to show how it might look like.
import GridItem from "./components/GridItem";

import { styled } from "stitches.config";
import UnderlineLeftRight from "@styles/underlineLeftRight";

const Grid = ({ children }) => {
    return (
        <Wrapper>
            <GridItem>
                <UnderlineLeftRight>Hover me</UnderlineLeftRight>
            </GridItem>
        </Wrapper>
    );
};

const Wrapper = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "$4",
});

export default Grid;
