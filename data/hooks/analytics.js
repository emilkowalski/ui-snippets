import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as Fathom from 'fathom-client';

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ['ui-snippets.dev'],
      url: 'https://leopard.ui-snippets.dev/script.js'
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
