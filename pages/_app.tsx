import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
// Temporary fix to avoid type error. TODO: Create types module
const PageTransition = require('next-page-transitions')

import * as gtag from '../lib/gtag'
import Layout from '../components/Layout'
import '../styles/index.css'

const TIMEOUT = 375

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const translateX = router.route === '/' ? '-100vw' : '100vw'

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Layout>
      <PageTransition timeout={TIMEOUT} classNames="page-transition">
        <Component key={router.route} {...pageProps} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          // opacity: 0;
          transform: translate3d(${translateX}, 0, 0);
        }
        .page-transition-enter-active {
          // opacity: 1;
          transition-timing-function: ease-in;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          // opacity: 1;
        }
        .page-transition-exit-active {
          // opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </Layout>
  )
}
