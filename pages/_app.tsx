import React, { ReactElement } from 'react'
import { NextPage } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.css'
import { AppProps } from 'next/app';

type NextPageWihtLayout = NextPage & {
  getLayout?: ( page: ReactElement)=> ReactNode
}

type AppPropsWihtLayout = AppProps & {
  Component: NextPageWihtLayout
}


function MyApp({ Component, pageProps } : AppPropsWihtLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />

  return getLayout( <Component { ...pageProps } /> )
}

export default MyApp
