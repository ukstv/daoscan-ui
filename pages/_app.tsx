import * as React from "react";
import "graphiql/graphiql.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <script data-goatcounter="https://daoscan.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    </>
  );
}

export default MyApp;
