// TODO: Temporary component to show how it might look like.
import GridItem from "./components/GridItem";

import { styled } from "stitches.config";
import snippets from "@components/Snippets";

const Grid = ({ children }) => {
    return (
        <Wrapper>
            {snippets.map((Snippet) => (
                <GridItem>
                    <Snippet>Hover me</Snippet>
                </GridItem>
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
