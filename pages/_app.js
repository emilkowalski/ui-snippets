import { globalStyles } from 'styles/global';
import 'vercel-toast/dist/vercel-toast.css';

import { useAnalytics } from 'data/hooks/analytics';
import Header from 'components/Header';
import Head from 'components/Head';

function MyApp({ Component, pageProps }) {
  globalStyles();
  useAnalytics();

  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
