// TODO: Temporary component to show how it might look like.

import { styled } from "stitches.config";

const Grid = () => {
    return (
        <Wrapper>
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </Wrapper>
    );
};

const Wrapper = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "$4",
});

const GridItem = styled("div", {
    height: "100px",
    backgroundColor: "$darkGray",
    borderRadius: "$1",
});

export default Grid;
