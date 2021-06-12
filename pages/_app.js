import { globalStyles } from "@styles/global";
import "@styles/animations.css";

import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
    globalStyles();
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
