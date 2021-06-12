import { styled } from "stitches.config";

const GridItem = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled("div", {
    height: "120px",
    backgroundColor: "$darkGray",
    borderRadius: "$1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export default GridItem;
