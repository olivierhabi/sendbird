import React from 'react';
import 'normalize.css';
import '../src/styled.d';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/toast.override.css';

import { ThemeProvider } from 'styled-components';

import { SbCallsProvider } from '../src/lib/sendbird-calls';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <SbCallsProvider appId="">
        <ThemeProvider theme={{ isWidget: false }}>
          {/* @ts-expect-error Server Component */}
          <Component {...pageProps} />
          <div id="react-modals" />
          <ToastContainer
            position="bottom-left"
            autoClose={false}
            transition={Flip}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
      </SbCallsProvider>
    </React.StrictMode>
  )
}
