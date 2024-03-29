import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GTAG}`}></Script>
    <Script id="google-analytics" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-${process.env.NEXT_PUBLIC_GTAG}', {
                page_path: window.location.pathname,
              });
                  `}
        </Script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9202555860423547"
     crossOrigin="anonymous"></script>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
