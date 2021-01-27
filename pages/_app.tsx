import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'
import Layout from '../components/Layout'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

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
      <Component key={router.route} {...pageProps} />
    </Layout>
  )
}
