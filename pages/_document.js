// pages/_document.tsx
import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "stitches.config";

export default class Document extends NextDocument {
    static async getInitialProps(ctx) {
        try {
            const initialProps = await NextDocument.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {/* Hide the body, unless JS is disabled */}
                        <style
                            dangerouslySetInnerHTML={{
                                __html: "body { opacity: 0; visibility: hidden; }",
                            }}
                        />
                        <noscript>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: "body { opacity: 1; visibility: visible; }",
                                }}
                            />
                        </noscript>
                        {/* Stitches CSS */}
                        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
                    </>
                ),
            };
        } finally {
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
