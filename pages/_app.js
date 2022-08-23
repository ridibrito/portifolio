import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Head>
        <link rel="shortcut icon" href="/css.png" />
   </Head>
 
  return <Component {...pageProps} />
}

export default MyApp
