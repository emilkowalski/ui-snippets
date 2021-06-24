import { globalStyles } from "@styles/global";
import "vercel-toast/dist/vercel-toast.css";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { useAnalytics } from "@lib/analytics";
import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
    globalStyles();
    useAnalytics();

    return (
        <>
            <Head>
                <meta name="keywords" content="ui snippets, ui, snippets, css, ui components, stitches, scss, ui inspiration" />
                <link rel="shortcut icon" href="favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                <meta name="msapplication-TileColor" content="#847EE2" />
                <meta name="theme-color" content="#847EE2" />
                <meta name="twitter:site" content="@emilkowalski_" />
                <meta name="twitter:creator" content="@emilkowalski_" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <NextSeo
                title="UI Snippets"
                description="A collection of CSS effects made with Next.js."
                openGraph={{
                    type: "website",
                    url: "https://ui-snippets.dev",
                    title: "UI Snippets",
                    description: "A collection of CSS effects made with Next.js.",
                    images: [
                        {
                            url: "https://ui-snippets.dev/thumbnail.jpg",
                            alt: "UI Snippets",
                        },
                    ],
                }}
            />
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
