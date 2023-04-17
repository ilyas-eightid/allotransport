import Layout from '@/components/Layout'
import '../styles/scss/global.scss'
import type { AppProps } from 'next/app'
import { dirname } from 'path'
import { useEffect } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <Layout metas={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

