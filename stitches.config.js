import { createCss } from "@stitches/react";

export const { styled, getCssString, global } = createCss({
    theme: {
        fonts: {
            sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        colors: {
            black: "hsl(197, 8%, 8%)",
            white: "hsl(241, 3%, 93%)",
            gray: "hsl(205, 5%, 53%)",
            darkGray: "hsl(197, 6%, 12%)",
        },
        fontWeights: {
            medium: "500",
            bold: "600",
        },
        space: {
            1: "4px",
            2: "8px",
            3: "16px",
            4: "32px",
            5: "64px",
            6: "128px",
            7: "256px",
            8: "512px",
        },
        radii: {
            1: "7px",
        },
    },
});
