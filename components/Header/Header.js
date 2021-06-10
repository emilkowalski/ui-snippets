import Link from "next/link";

import Container from "@components/Container";
import { styled } from "stitches.config";

const Header = () => {
    return (
        <Wrapper as="header">
            <Logo>UI Snippets</Logo>
        </Wrapper>
    );
};

const Wrapper = styled(Container, {
    position: "sticky",
    top: "0",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

const Logo = styled("a", {
    background: "linear-gradient(118deg, rgba(106,225,255,1) 0%, rgba(194,158,218,1) 80%, rgba(91,105,230,1) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "20px",
    fontWeight: "$bold",
    display: "inline-block",
});

export default Header;
