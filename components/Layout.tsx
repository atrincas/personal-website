import Head from 'next/head'
import MainHeader from './MainHeader'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'Adam Trincas' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MainHeader />
      {children}
      <Footer />
    </>
  )
}
