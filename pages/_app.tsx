import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
      <Script src="https://counter4.optistats.ovh/private/counter.js?c=81mp5d88yqtw1ac22kc5t8a87nyjmwyh&down=async" async/>
      
      <Component {...pageProps} />
      </>
  );
}

export default MyApp;
