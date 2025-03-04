import * as React from "react";
import "graphiql/graphiql.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { THEME } from "../theme/theme";
import { ThemeProvider } from "theme-ui";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="author" href="/humans.txt" />
        <meta name="apple-mobile-web-app-title" content="Daoscan" />
        <meta name="description" content="Daoscan - DAO Indexer" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/images/logo192.png" />
        <link rel="icon" href="/images/logo192.png" sizes="192x192" />
        <link rel="icon" href="/images/logo512.png" sizes="512x512" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:200,300,400,400i|Montserrat:500|Oswald:200,300,400&display=swap&subset=cyrillic,latin-ext"
          rel="stylesheet"
        />
        <title>DAO Indexer</title>
      </Head>
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
        <script data-goatcounter="https://daoscan.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next {
            height: 100%;
          }
        `}</style>
      </ThemeProvider>
    </>
  );
}

export default App;
