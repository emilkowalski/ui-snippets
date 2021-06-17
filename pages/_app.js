import { globalStyles } from "@styles/global";
import "vercel-toast/dist/vercel-toast.css";
import Head from "next/head";

import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
    globalStyles();
    return (
        <>
            <Head>
                <meta name="keywords" content="ui snippets, ui, snippets, css, ui components, stitches, scss, ui inspiration" />
                <title>UI Snippets</title>
                <link rel="shortcut icon" href="favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                <meta name="msapplication-TileColor" content="#847EE2" />
                <meta name="theme-color" content="#847EE2" />
                <meta name="twitter:site" content="@emilkowalski_" />
                <meta name="twitter:creator" content="@emilkowalski_" />
                <meta name="twitter:card" content="thumbnail" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
