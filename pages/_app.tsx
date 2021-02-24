/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';

import './styles.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
