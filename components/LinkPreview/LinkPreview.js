import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import * as Portal from "@radix-ui/react-portal";

import { styled } from "stitches.config";

const StyledContent = styled(HoverCard.Content, {
    borderRadius: 3,
    padding: "20px",
    fontSize: 14,
    backgroundColor: "gainsboro",
    color: "black",
});

const StyledArrow = styled(HoverCard.Arrow, {
    fill: "gainsboro",
});

const LinkPreview = ({ url }) => {
    const width = 200;
    const height = 125;
    const quality = 50;
    const layout = "fixed";

    const params = encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": width * 3,
        "viewport.height": height * 3,
    });

    const screenshot = `https://api.microlink.io/?${params}`;

    return (
        <HoverCard.Root>
            <HoverCard.Trigger href="http://twitter.com/twitter">@twitter</HoverCard.Trigger>
            <StyledContent side="top" sideOffset={5}>
                <Image width={width} height={height} layout="fixed" quality={50} src={screenshot} />
            </StyledContent>
        </HoverCard.Root>
    );
};

export default LinkPreview;
