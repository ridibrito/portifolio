import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Head from "next/head";

import "../styles/globals.css";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/icone.png" type="image/x-icon" />
      </Head>
      <Header />

      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
