import Layout from "@/components/Layout";

import Head from "next/head";
import "@/styles/globals.css";
import {
  Merriweather,
  Merriweather_Sans,
  Radio_Canada,
} from "next/font/google";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={merriweather.className}>
      <Head>
        <link rel="icon" href="/beee.png" />
        <title>Spelling Bee Game</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
